import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import founder from '../assets/edward.png';

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
            ),
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="background">
                        <div className="title">
                            What our customer are saying
                    </div>
                        <div className="line"></div>
                        <div className="element">
                            <img src="element1.png" alt="element" />
                        </div>
                        <div className="feedback">
                            <div className="left_side">
                                <img className="avatar" src={founder} alt="avatar" />
                                <div className="items">
                                    <div className="name">Edward Newgate</div>
                                    <div className="post">Founder Circle</div>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="text">
                                    “Our dedicated patient engagement app and
                                    web portal allow you to access information
                                    instantaneously (no tedeous form, long calls,
                                    or administrative hassle) and securely”
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="background">
                        <div className="title">
                            What our customer are saying
                    </div>
                        <div className="line"></div>
                        <div className="element">
                            <img src="element1.png" alt="element" />
                        </div>
                        <div className="feedback">
                            <div className="left_side">
                                <img className="avatar" src={founder} alt="avatar" />
                                <div className="items">
                                    <div className="name">Edward Newgate</div>
                                    <div className="post">Founder Circle</div>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="text">
                                    “Our dedicated patient engagement app and
                                    web portal allow you to access information
                                    instantaneously (no tedeous form, long calls,
                                    or administrative hassle) and securely”
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="background">
                        <div className="title">
                            What our customer are saying
                    </div>
                        <div className="line"></div>
                        <div className="element">
                            <img src="element1.png" alt="element" />
                        </div>
                        <div className="feedback">
                            <div className="left_side">
                                <img className="avatar" src={founder} alt="avatar" />
                                <div className="items">
                                    <div className="name">Edward Newgate</div>
                                    <div className="post">Founder Circle</div>
                                </div>
                            </div>
                            <div className="right_side">
                                <div className="text">
                                    “Our dedicated patient engagement app and
                                    web portal allow you to access information
                                    instantaneously (no tedeous form, long calls,
                                    or administrative hassle) and securely”
                            </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}