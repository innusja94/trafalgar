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
                    Virtual healthcare<td />for you
                </div>
                <div className={style.description}>
                    Trafalgar provides progressive, and affordable<td />
                    healthcare, accessible on mobile and online<td />
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