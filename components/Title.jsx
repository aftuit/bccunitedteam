import React from 'react';
import style from "../styles/title.module.scss";
import { Fade } from 'react-reveal';
const Title = ({ title, desc }) => {
    return (
        <Fade bottom opposite>
            <div className={style.titleWrap}>
                <h3 className="text-orange font-400">{title}</h3>
                <h1 className="text-blue mt-3 font-400">{desc}</h1>
            </div>
        </Fade>
    )
}

export default Title;