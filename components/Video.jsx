import React from 'react'
import { Button } from '@mantine/core';
import { Bounce, Fade } from 'react-reveal';
import style from "../styles/video.module.scss";
import Image from "next/image";
import Link from "next/link";

const Video = ({lang, languageType}) => {

    const [play, setPlay] = React.useState(false);
    const video = React.useRef(null);

    React.useEffect(() => {
        video.current.load();
        play ?
            video.current.play() :
            video.current.pause();
    }, [play])

    return (
        <div className={style.vid_wrap}>


            <div className={`${style.modalwrap} ${play ? style.show : ' '}`}>
                <div className={style.modalbody}>
                    <span
                        className={style.closeModal}
                        onClick={() => setPlay(!play)}
                    >
                        &times;
                    </span>
                    <video ref={video} controls className={style.video}>
                        <source src="/assets/img/video__added.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>
            <div onClick={() => setPlay(!play)} className={`${style.fade} ${play ? style.showfade : ' '}`}></div>

                <div className={style.vid_row + " row m-0"}>
                    <div className={style.vid_left + " col-md-6 col-12"}>
                        <Bounce bottom>
                             <div className={style.play_btn_wrap}>
                                <Image
                                    layout="fill"
                                    onClick={() => setPlay(!play)}
                                    className={style.play_btn}
                                    src="/assets/img/play3.png"
                                    alt="play" />
                            </div>
                          
                        </Bounce>
                    </div>
                    <div className={style.vid_right + " col-md-6 col-12"} >
                        <Fade bottom cascade>
                            <div>
                                <h2 className={style.h2 + " font-600"}>
                                    {lang[languageType].video.title1} <br />
                                    {lang[languageType].video.title2}</h2>

                                <p className={style.p + " font-200"}>
                                {lang[languageType].video.desc}
                                </p>
                                <Link href="#contact" scroll={false}>
                                    <Button
                                        color="yellow"
                                        size="md"
                                        className={style.btn + " mt-4"}>
                                        {lang[languageType].video.consult}
                                    </Button>
                                </Link>
                            </div>
                        </Fade>
                    </div>
            </div>
        </div>

    )
}

export default Video