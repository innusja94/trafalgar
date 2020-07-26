import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.left_side}>
                <div className={style.logo_name}>
                    Trafalgar
                </div>
                <div className={style.text}>
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                    for everyone
                </div>
                <div className={style.copyright}>
                    ©Trafalgar PTY LTD 2020. All rights reserved
                </div>
            </div>
            <div className={style.right_side}>
                <div className={style.items}>

                </div>
            </div>
        </div>

    );
}

export default Footer;