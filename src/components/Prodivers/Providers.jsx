import React from 'react';
import style from './Providers.module.css'


const Providers = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.back_image}>
                <img src="providers.png" alt="image" />
            </div>
            <div className={style.text}>
                <div className={style.title}>
                    Leading healthcare <td /> providers
                </div>
                <div className={style.line}></div>
                <div className={style.description}>
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
                    in the solutions we deliver
                </div>
                <div>
                    <button className={style.button}>Learn more</button>
                </div>
                <div className={style.element}>
                    <img src="element.png" alt="element" />
                </div>
            </div>
        </div >
    );
}

export default Providers;