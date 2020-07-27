import React from 'react';
import style from './CheckOut.module.css'

const CheckOut = () => {
    return (
        <div className={style.check}>
            <img src="pic.png" alt="pic" className={style.pic} />
            <img src="element.png" alt="element" className={style.element1} />
            <div className={style.name}>
                Check out our latest article
            </div>
            <div className={style.line}></div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.picture}>
                        <img src="laboratory.png" alt="pic" />
                    </div>
                    <div className={style.text}>
                        <div className={style.title}>
                            Disease detection, check
                            up in the laboratory
                        </div>
                        <div className={style.description}>
                            In this case, the role of the health laboratory is very important to do
                            a disease detection...
                        </div>
                        <div className={style.arrow}>
                            Read more
                            <img src="arrow.png" alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.picture}>
                        <img src="herbal.png" alt="pic" />
                    </div>
                    <div className={style.text}>
                        <div className={style.title}>
                            Herbal medicines that are
                            safe for consumption
                        </div>
                        <div className={style.description}>
                            Herbal medicine is very widely used at this time because of its very good for your health...
                        </div>
                        <div className={style.arrow}>
                            Read more
                            <img src="arrow.png" alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.picture}>
                        <img src="skin.png" alt="pic" />
                    </div>
                    <div className={style.text}>
                        <div className={style.title}>
                            Natural care for healthy
                            facial skin
                        </div>
                        <div className={style.description}>
                            A healthy lifestyle should start from now and also for your skin health.
                            There are some...
                        </div>
                        <div className={style.arrow}>
                            Read more
                            <img src="arrow.png" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <button className={style.button}>View all</button>
            <img src="element.png" alt="element" className={style.element2} />
        </div>

    );
}

export default CheckOut;