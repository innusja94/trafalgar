import React from 'react';
import style from './Download.module.css'


const Download = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.text}>
                <div className={style.title}>
                    Download our<td /> mobile apps
                </div>
                <div className={style.line}></div>
                <div className={style.description}>
                    Our dedicated patient engagement app and<td />
                    web portal allow you to access information <td />
                    instantaneously (no tedeous form, long calls,<td />
                    or administrative hassle) and securely
                </div>
                <button className={style.button}>
                    Download
                </button>
            </div>
            <div className={style.down_load}>
                <img src="download.png" alt="image" />
            </div>
        </div >
    );
}

export default Download;