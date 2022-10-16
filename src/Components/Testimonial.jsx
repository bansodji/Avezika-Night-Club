import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { TestimonialData } from '../Data/TestimonialData';

const TransparentBg = {
    backgroundColor: "rgba(255,255,255,0.1)"
}

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};

const Testimonial = () => {
    return (
        <section className='py-5 testimonial-bg'>
            <Container>
                <HeadingNdesc name="Testimonials" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <Swiper
                    modules={[Navigation, EffectFade, Pagination]}
                    loop={true}
                    pagination={pagination}
                    className="mySwiper mt-5"
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {TestimonialData.map((data) => (
                        <SwiperSlide>
                            <div className='d-flex align-items-center size-100 p-5' style={TransparentBg}>
                                <div className="me-4">
                                    <img src={data.image} className="circle-img-x2" alt="" />
                                </div>
                                <div className="">
                                    <h6 className='fff heading uppercase pt-3'>{data.name}</h6>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Container>
        </section>
    );
}


export default Testimonial;