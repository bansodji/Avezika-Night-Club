import '../slider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import Img1 from '../Images/Hero/hero1.jpg';
import Img2 from '../Images/Hero/hero2.jpg';
import Img3 from '../Images/Hero/hero3.jpg';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Col, Container, Row } from 'react-bootstrap';
import { ButtonWithArrow } from './Buttons';

const buttonPosition = {
    position: 'absolute',
    top: '50%',
    left: '-20%',
    transform: 'translate(20%,-50%)'
}



function Hero() {
    return (
        <>
            <div id='hero' className='hero'>
                <Container fluid>
                    <Swiper
                        navigation={true}
                        modules={[Navigation, EffectFade]}
                        loop={true}
                    // effect={'fade'}
                    // speed={800}
                    >
                        <SwiperSlide>
                            <Slide image={Img1} imageBtn="16 Oct" imageTitle="Refresh mind" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide image={Img2} imageBtn="15 Oct" imageTitle="Crazy 80th" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide image={Img3} imageBtn="13 Oct" imageTitle="On the wave" />
                        </SwiperSlide>

                    </Swiper>
                </Container>
            </div>
        </>
    );
}

function Slide(props) {
    return (
        <Row className='hero-spacing'>
            <Col lg="7" md="6">
                <div className='size-100 position-relative'>
                    <img style={{ height: '22rem' }} className='img-fluid' src={props.image} alt="" />
                    <div style={buttonPosition}>
                        <button className='f-btn-2 uppercase heading font-400'>{props.imageBtn}</button>
                        <h1 className='fff heading title display-4 mt-4 font-700'>{props.imageTitle}</h1>
                    </div>
                </div>
            </Col>
            <Col lg="5" md="6">
                <div className='d-flex align-items-center size-100'>
                    <div className=''>
                        <p className='fff-50 mb-5'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\rDuis aute irure dolor in reprehenderit in voluptate velit ad minim veniam, quis nostrud exercitation ullamcoesse cillum</p>
                        <ButtonWithArrow name="Show Details" />
                    </div>
                </div>
            </Col>
        </Row>
    );
}


export default Hero;