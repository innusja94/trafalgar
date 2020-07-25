import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src="logo1.png" alt="logo" />
            </div>
            <div className={style.menu}>
                <a href="#">Home</a>
                <a href="#">Find a doctor</a>
                <a href="#">Apps</a>
                <a href="#">Testimonials</a>
                <a href="#">About us</a>
            </div>
        </div>

    );
}

export default Header;