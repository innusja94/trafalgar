import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './CarouselBox.module.css';
import founder from '../assets/edward.png';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item >
                    <div className={style.back_ground} ></div>
                </Carousel.Item>
                <Carousel.Caption>
                    <div className={style.title}>
                        What our customer are saying
                    </div>
                    <div className={style.line}></div>
                    <div className={style.feedback}>
                        <div className={style.left_side}>
                            <img className={style.avatar} src={founder} />
                            <div className={style.items}>
                                <div className={style.name}>Edward Newgate</div>
                                <div className={style.post}>Founder Circle</div>
                            </div>
                        </div>
                        <div className={style.right_side}>
                            <div className={style.text}>“Our dedicated patient engagement app and<td />
                        web portal allow you to access information <td />
                        instantaneously (no tedeous form, long calls, <td />
                        or administrative hassle) and securely”</div>
                        </div>
                    </div>
                </Carousel.Caption>

            </Carousel>

        )
    }
}