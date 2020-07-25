import React from 'react';
import style from './HomePage.module.css'


const HomePage = () => {
    return (
        <div className={style.header}>
            <div className={style.illustration}>
                <img src="illustration.png" alt="illustration" />
            </div>
            <div className={style.element}>
                <img src="element.png" alt="element" />
            </div>
            <div className={style.text}>
                <div className={style.title}>
                    Virtual healthcare for you
                </div>
                <div className={style.description}>
                    Trafalgar provides progressive, and affordable
                    healthcare, accessible on mobile and online
                    for everyone
                </div>
                <button className={style.button}>
                    Consult today
                </button>
            </div>
        </div >
    );
}

export default HomePage;