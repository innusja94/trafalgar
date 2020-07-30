import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

export default class SliderBox extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: (
                <div>
                    <div className="next-slick-arrow"> → </div>
                </div>
            ),
            prevArrow: (
                <div>
                    <div className="prev-slick-arrow"> ← </div>
                </div>
            )
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="background">
                        <h3>1</h3>
                    </div>
                    <div className="background">
                        <h3>2</h3>
                    </div>
                    <div className="background">
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}