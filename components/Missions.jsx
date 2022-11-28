import React from 'react'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Title from "./Title";
import style from "../styles/mission.module.scss";
import Image from "next/image"

const Missions = ({lang, languageType}) => {

    const missions = [
        { id: 1, img: '/assets/img/development_1.png', title: lang[languageType].row.item1[0], parag: lang[languageType].row.item1[1] },
        { id: 2, img: '/assets/img/development_2.png', title: lang[languageType].row.item2[0], parag: lang[languageType].row.item2[1]},
        { id: 3, img: '/assets/img/development_3.png', title: lang[languageType].row.item3[0], parag: lang[languageType].row.item3[1]},
    ]

    return (
        <div className={style.missionWrap}>
            <div className={style.imageWrapper}>
                <Image src="/assets/img/kontur.png" alt="" layout="fill" className={style.image + " " + style.contur}/>
            </div>
            <div className="d-md-flex justify-content-between align-items-center">
                <Fade bottom>
                    <div className={"col-md-6 col-12 container-md"}>
                        <Title title={lang[languageType].missions.title} desc={lang[languageType].missions.desc} />
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='col-md-5 col-12 mt-md-0 mt-3 '>
                        <p className={style.info + "mt-auto font-200"}>{lang[languageType].missions.info}</p>
                    </div>
                </Fade>
            </div>
            <div className={style.row + " row"}>
                {
                    missions.map((mission) =>
                        <div key={mission.id} className='col-md-4 col-12 px-md-4 text-center' >
                            <Fade bottom right={mission.id===3 && true} left={mission.id===1 && true}>
                                <div>
                                    <Image src={mission.img} alt="" width={130} height={100} />
                                    <h2 className='text-blue my-3 font-400'>{mission.title}</h2>
                                    <p className='mt-2 font-200'>{mission.parag}</p>
                                </div>
                            </Fade>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Missions