import React, { memo } from "react";
import Title from "./Title";
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import Image from "next/image";
import style from "../styles/preview.module.scss";

const Preview = ({lang, languageType}) => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        arrow: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    }
    const previews = [
        { id: 1, img: '/assets/img/h3_img2.jpg', icon: '/assets/img/icon1.png', title: lang[languageType].preview.item1[0], desc: lang[languageType].preview.item1[1] },
        { id: 2, img: '/assets/img/h3_img3.jpg', icon: '/assets/img/icon4.png', title: lang[languageType].preview.item2[0], desc: lang[languageType].preview.item2[1] },
        { id: 3, img: '/assets/img/h3_img4.jpg', icon: '/assets/img/icon3.png', title: lang[languageType].preview.item3[0], desc: lang[languageType].preview.item3[1] },
        { id: 4, img: '/assets/img/h3_img3.jpg', icon: '/assets/img/icon2.png', title: lang[languageType].preview.item4[0], desc: lang[languageType].preview.item4[1] },
    ]

    return (
        <div className={style.previewWrap}>
            <div className="container">
                <Title title={lang[languageType].preview.title} desc={lang[languageType].preview.desc} />
            </div>
            <div className={style.rowPreview + " "}>
                <Slider {...settings}>
                    {
                        previews.map(preview => {
                            return (
                                <div className={style.containerRow + " container d-block m-auto"} key={preview.id}>
                                    <div className={style.row + " row"} key={preview.id}>
                                        <Fade left opposite>
                                            <div className={style.col12 + " col-md-6 col-12"}>
                                                <Image width={500} height={500} src={preview.img} alt="" className={style.prw + " d-block my-auto"} />
                                            </div>
                                        </Fade>
                                        <Fade right opposite>
                                            <div className="col-md-6 col-12 mt-md-0 mt-4">
                                                <div className="img-wrapper ms-4">
                                                    <Image src={preview.icon} alt="" width={80} height={80} />
                                                </div>
                                                <div className="info ms-4">
                                                    <h2 className="mt-4 font-700 text-blue">{preview.title}</h2>
                                                    <p className="mt-4 font-400">{preview.desc}</p>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default memo(Preview);