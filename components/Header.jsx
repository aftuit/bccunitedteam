import React from "react";
import Image from "next/image";
import { Button } from '@mantine/core';
import Fade from 'react-reveal/Fade';
import Navbar from "./Navbar.jsx";
import style from "../styles/header.module.scss";
import Link from "next/link";

const Header = ({ lang, languageType }) => {


    return (
        <>
            <Navbar />
            <div className={style.demoCont}>
                <div className={style.imageWrapper}>
                    <Image src="/assets/img/back.jpg" alt="" layout="fill" className={style.image + " " + style.img} />
                </div>
                <div className={style.content}>
                    <Fade bottom>
                        <h2 className={style?.title}>{lang[languageType].header.title}</h2>
                    </Fade>

                    <Fade bottom>
                        <Link href="#apartments" scroll={false}>
                            <Button size="md" className="mt-4">
                                {lang[languageType].header.button}
                            </Button>
                        </Link>
                    </Fade>

                </div>

                <div className={style.bottomPart + " container"}>
                    <Link className={style.telnumb} href="tel: +998981156544">
                        <div className={style.tel_wrap}>
                            <Image className={style.tel} src={"/assets/img/tel.png"} width={60} height={60} alt="tel" />
                        </div>
                        <span className={style.number}>+998 (98) 115-65-44</span>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Header;


