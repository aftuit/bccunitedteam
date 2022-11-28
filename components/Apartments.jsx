import React from 'react';
import Title from "./Title";
import { Button } from '@mantine/core';
import { Switch } from '@mantine/core';
import Image from "next/image";
import Link from "next/link";
import style from "../styles/apartment.module.scss";
const Apartments = ({ lang, languageType, apartment }) => {


    const [isOn, setIsOn] = React.useState(true);
    const [quantity, setQuantity] = React.useState("double");
    const [floor, setFloor] = React.useState(0);
    const [roomIndex, setRoomIndex] = React.useState(0);


    function changeRoom(type) {
        if (type === "forward" && roomIndex < (apartment[floor][quantity].length - 1)) {
            setRoomIndex(roomIndex + 1);

        } else if (type === "backward" && roomIndex > 0) {
            setRoomIndex(roomIndex - 1);
        }
    }

    return (
        <div className={style.apartments} id="apartments">
            <div className='container'>
                <Title title={""} desc={lang[languageType].apartments.desc} />
            </div>
            <div className="container mt-5">
                <div className={" row row-md-reverse"}>
                    <div className={" col col-md-5 col-12"}>
                        <div className={style.selectGroup + " w-100"}>
                            <select name="" className={style.select} value={quantity} onChange={(evt) => setQuantity(evt.target.value)}>
                                <option value="double">{lang[languageType].apartments.select1}</option>
                                <option value="triple">{lang[languageType].apartments.select2}</option>
                            </select>
                            <select name="" className={style.select} value={floor} onChange={(e) => setFloor(e.target.value)}>
                                {
                                    lang[languageType].apartments.floors.map((item, index) => (<option value={index} key={item}>{item}</option>))
                                }
                            </select>
                        </div>

                        <div className={style.apartCard + " mt-3"}>
                            <div className={style.apartCardHeader}>
                                <h2 className={style.h2 + " font-medium"}>{lang[languageType].apartments.info}</h2>
                            </div>
                            <div className={style.apartCardBody}>
                                <div className={style.priceRow + " row"}>
                                    <div className="col-6 text-center">
                                        <div>{lang[languageType].apartments.total}<b>{apartment && apartment[floor][quantity][roomIndex]?.price}</b> {languageType === "uz" ? "so'mdan boshlab" : "сум"}</div>
                                    </div>
                                    <div className="col-6 text-center">
                                        {lang[languageType].apartments.area}<b>{apartment[floor][quantity][roomIndex]?.area} {languageType === "uz" ? "m² dan boshlab" : "м²"}</b>
                                    </div>
                                </div>
                                <div className="informs">
                                    <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                        <div>{lang[languageType].apartments.balcony}</div>
                                        <div>{apartment[floor][quantity][roomIndex]?.balcony} {languageType === "uz" ? "m²" : "м²"}</div>
                                    </div>
                                    <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                        <div>{lang[languageType].apartments.bedroom}</div>
                                        <div>{apartment[floor][quantity][roomIndex]?.bedroom} {languageType === "uz" ? "m²" : "м²"}</div>
                                    </div>
                                    <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                        <div>{lang[languageType].apartments.bathroom}</div>
                                        <div>{apartment[floor][quantity][roomIndex]?.bathroom} {languageType === "uz" ? "m²" : "м²"}</div>
                                    </div>
                                    <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                        <div>{lang[languageType].apartments.hallway}</div>
                                        <div>{apartment[floor][quantity][roomIndex]?.hall} {languageType === "uz" ? "m²" : "м²"}</div>
                                    </div>
                                    <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                        <div>{lang[languageType].apartments.kitchen}</div>
                                        <div>{apartment[floor][quantity][roomIndex]?.kitchen} {languageType === "uz" ? "m²" : "м²"}</div>
                                    </div>
                                    {
                                        apartment[floor][quantity][roomIndex]?.living_room ?
                                            <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                                <div>{lang[languageType].apartments.living_room}</div>
                                                <div>{apartment[floor][quantity][roomIndex]?.living_room} {languageType === "uz" ? "m²" : "м²"}</div>
                                            </div> :
                                            <></>
                                    }

                                </div>
                            </div>

                            <div className={style.apartCardFooter + " d-flex justify-content-between align-items-center"}>
                                <Link href="#contact" scroll={false} className='d-block w-100'>
                                    <Button className={style.button + " w-100 px-3"} size="lg">{lang[languageType].apartments.call}</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-7 col-12">
                        <div className={style.lightimg} style={{ width: '100%', position: 'relative' }}>
                            <Image
                                alt='Mountains'
                                src={isOn ?
                                    apartment[floor][quantity][roomIndex]?.image_2d:
                                    apartment[floor][quantity][roomIndex]?.image_3d 
                                }
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={style.switch + " d-flex align-items-center justify-content-between"}>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h6 className='mx-2 mb-0'>2D</h6>
                                <Switch className='mx-2 mb-0' size="md" onClick={() => setIsOn(!isOn)} />
                                <h6 className='mx-2 mb-0'>3D</h6>
                            </div>
                            <div className="buttons">
                                <Button
                                    size="md"
                                    className={style.btn + ' mx-1'}
                                    onClick={() => changeRoom("backward")}
                                >{"<"}</Button>
                                <Button
                                    size="md"
                                    className={style.btn + ' mx-1'}
                                    onClick={() => changeRoom("forward")}
                                >{">"}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Apartments;

