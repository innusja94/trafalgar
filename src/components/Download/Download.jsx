import React from 'react';
import style from './Download.module.css'


const Download = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <div className={style.title}>
                    Download our mobile apps
                </div>
                <div className={style.line}></div>
                <div className={style.description}>
                    Our dedicated patient engagement app and
                    web portal allow you to access information
                    instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely
                </div>
                <button className={style.button}>
                    Download
                    <img src="arrow-down.png" alt="arrow" className={style.arrowDown} />
                </button>
            </div>
            <div className={style.down_load}>
                <img src="download.png" alt="download" />
            </div>
        </div >
    );
}

export default Download;