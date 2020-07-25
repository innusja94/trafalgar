import React from 'react';
import style from './Services.module.css'

const Services = () => {
    return (
        <div className={style.service}>
            <div className={style.vector}>
                <img src="vector.png" alt="vector" />
            </div>

            <div className={style.element}>
                <img src="element.png" alt="element" />
            </div>
            <div className={style.title}>
                Our services
            </div>
            <div className={style.line}></div>
            <div className={style.description}>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </div>
            <div>
                <button className={style.button}>Learn more</button>
            </div>
        </div >

    );
}

export default Services;