import React from 'react';
import style from './CardsServices.module.css'

const CardsServices = () => {
    return (
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.doctor}>
                    <img src="find.png" alt="image" />
                </div>
                <div className={style.title}>
                    Search doctor
                </div>
                <div className={style.description}>
                    Choose your doctor from thousands <td /> of specialist, general, and trusted<td /> hospitals
                </div>
            </div>
            <div className={style.card}>
                <div className={style.pharmacy}>
                    <img src="pharmacy.png" alt="image" />
                </div>
                <div className={style.title}>
                    Online pharmacy
                </div>
                <div className={style.description}>
                    Buy  your medicines with our<td /> mobile application with a simple<td /> delivery system
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="consult.png" alt="image" />
                </div>
                <div className={style.title}>
                    Consultation
                </div>
                <div className={style.description}>
                    Free consultation with our trusted<td /> doctors and get the best<td /> recomendations
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="info.png" alt="image" />
                </div>
                <div className={style.title}>
                    Details info
                </div>
                <div className={style.description}>
                    Free consultation with our trusted<td /> doctors and get the best<td /> recomendations
                </div>
            </div>
            <div className={style.card}>
                <div className={style.emergency}>
                    <img src="emergency.png" alt="image" />
                </div>
                <div className={style.title}>
                    Emergency care
                </div>
                <div className={style.description}>
                    You can get 24/7 urgent care for<td /> yourself or your<td /> children and your
                    lovely family
                </div>
            </div>
            <div className={style.card}>
                <div>
                    <img src="tracking.png" alt="image" />
                </div>
                <div className={style.title}>
                    Tracking
                </div>
                <div className={style.description}>
                    Track and save your medical history<td /> and health data
                </div>
            </div>


        </div>

    );
}

export default CardsServices;