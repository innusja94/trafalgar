import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import style from './CarouselBox1.module.css'


export default class CarouselBox1 extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={style.slickSliderSlidesSlickInitialized}>
                        <button className={style.slickArrowSlickPrev} type="button" data-role="none" style={{ display: "block" }}></button>
                        <button className={style.slickArrowSlickNext} type="button" data-role="none" style={{ display: "block" }}></button>
                        <img src="herbal.png" alt="" style={{ width: 100 }} />
                    </div>
                    <div className={style.slickSliderSlidesSlickInitialized}>
                        <img src="illustration.png" alt="" style={{ width: 100 }} />
                    </div>
                    <div className={style.slickSliderSlidesSlickInitialized}>
                        <img src="pharmacy.png" alt="" style={{ width: 100 }} />
                    </div>

                </Slider>
            </div>
        )
    }

}