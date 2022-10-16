import React, { useRef, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import AboutBg from "../Images/about-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const aboutBg = {
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};

const About = () => {
    return (
        <section className='py-5' style={aboutBg}>
            <Container className=''>
                <HeadingNdesc name="About Our Club" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <Row className='my-5'>
                    <Col lg="6">
                    </Col>
                    <Col lg="6">
                        <div>
                            <Swiper
                                modules={[Navigation, EffectFade, Pagination]}
                                loop={true}
                                pagination={pagination}
                                className="mySwiper"
                            // effect={'fade'}
                            // speed={800}
                            >
                                <SwiperSlide>
                                    <Slide name="We are the best in the field."/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slide name="We provide best services"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Slide name="We are the beat in the field."/>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

const Slide = (props) => {
    return (
        <div className='fff'>
            <h5 className='heading mb-4'>{props.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque voluptatum accusantium tenetur modi nesciunt in, est voluptates. Eum dolore expedita voluptas sequi molestias, cumque architecto ea repudiandae amet, natus error sit laudantium hic, neque eveniet</p>
        </div>
    );
}

export default About;