import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.left_side}>
                <div className={style.logo_name}>
                    <p className={style.logo_T}>T</p>
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
                    <div className={style.item_company}>
                        <p className={style.title}>Company</p>
                        <a href="/#">About</a>
                        <a href="/#">Testimonials</a>
                        <a href="/#">Find a doctor</a>
                        <a href="/#">Apps</a>
                    </div>
                    <div className={style.item_region}>
                        <p className={style.title}>Region</p>
                        <a href="/#">Indonesia</a>
                        <a href="/#">Singapore</a>
                        <a href="/#">Hongkong</a>
                        <a href="/#">Canada</a>
                    </div>
                    <div className={style.item_help}>
                        <p className={style.title}>Help</p>
                        <a href="/#">Help center</a>
                        <a href="/#">Contact support</a>
                        <a href="/#">Instructions</a>
                        <a href="/#">How it works</a>
                    </div>
                </div>
            </div>
            <div className={style.dots}><img src="element.png" alt="element" /></div>

        </div>

    );
}

export default Footer;