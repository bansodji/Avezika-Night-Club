import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import TeamData from '../Data/TeamData';

const Team = () => {
    return (
        <section className='py-5'>
            <Container className=''>
                <HeadingNdesc name="We Have a Wonderful Team" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <Row className='g-0 mt-5'>
                    {
                        TeamData.map((data) => (
                            <Col lg="4" md="4" sm="6">
                                <div className='box' style={{ height: '25rem', width: '100%' }}>
                                    <div className='size-100'>
                                        <img style={{}} className='size-100' src={data.image} alt={data.name} />
                                    </div>
                                    <div className='box-overlay fff size-100 hover-shadow'>
                                        <div className='size-100 d-flex flex-column justify-content-center align-items-center p-4'>
                                            <h5 className='heading uppercase font-600 lh-1'>{data.name}</h5>
                                            <h6 className='font-300 lh-1'>{data.prof}</h6>
                                            <p className='text-center mt-3'>{data.desc}</p>
                                            <div className='mt-5'>
                                                <i class="fab fa-facebook-f mx-3 fff-50 hover-color-2 fs-4"></i>
                                                <i class="fab fa-twitter mx-3 fff-50 hover-color-2 fs-4"></i>
                                                <i class="fab fa-google-plus-g mx-3 fff-50 hover-color-2 fs-4"></i>
                                                <i class="fab fa-instagram mx-3 fff-50 hover-color-2 fs-4"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </section>
    );
}

export default Team;