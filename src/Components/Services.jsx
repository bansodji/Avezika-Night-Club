import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import ServicesData from '../Data/ServicesData';


const Services = () => {
    return (
        <section className='py-5'>
            <Container>
                <HeadingNdesc name="Our Services" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <Row className='gy-4 mt-4'>
                    {
                        ServicesData.map((data) => (
                            <Col className='size-100' lg="4" md="6" sm="6">
                                <div className='fff d-flex size-100 p-4 cursor-pointer services-box' style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
                                    <i class={`${data.icon} services-icon me-3 mt-1 fs-4 f-color-2`}></i>
                                    <div>
                                        <h4>{data.name}</h4>
                                        <p className='font-400'>{data.desc}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;