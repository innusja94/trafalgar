import React from 'react';
import style from './CardsServices.module.css'

const CardsServices = () => {
    return (
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.doctor}>
                    <img src="find.png" alt="find" />
                </div>
                <div className={style.title}>
                    Search doctor
                </div>
                <div className={style.description}>
                    Choose your doctor from thousands of specialist, general, and trusted hospitals
                </div>
            </div>
            <div className={style.card}>
                <div className={style.pharmacy}>
                    <img src="pharmacy.png" alt="pharmacy" />
                </div>
                <div className={style.title}>
                    Online pharmacy
                </div>
                <div className={style.description}>
                    Buy  your medicines with our mobile application with a simple delivery system
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="consult.png" alt="consult" />
                </div>
                <div className={style.title}>
                    Consultation
                </div>
                <div className={style.description}>
                    Free consultation with our trusted  doctors and get the best recomendations
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="info.png" alt="info" />
                </div>
                <div className={style.title}>
                    Details info
                </div>
                <div className={style.description}>
                    Free consultation with our trusted doctors and get the best recomendations
                </div>
            </div>
            <div className={style.card}>
                <div className={style.emergency}>
                    <img src="emergency.png" alt="emergency" />
                </div>
                <div className={style.title}>
                    Emergency care
                </div>
                <div className={style.description}>
                    You can get 24/7 urgent care for yourself or your children and your
                    lovely family
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="tracking.png" alt="tracking" />
                </div>
                <div className={style.title}>
                    Tracking
                </div>
                <div className={style.description}>
                    Track and save your medical history and health data
                </div>
            </div>


        </div>

    );
}

export default CardsServices;