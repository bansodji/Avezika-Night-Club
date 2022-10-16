import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import { TextBox } from './TableReservation';
import { ButtonWithArrowFilled } from './Buttons';

const Contact = () => {
    return (
        <section className='py-5'>
            <Container>
                <HeadingNdesc name="Contact Us" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                <form action="">
                    <Row>
                        <TextBox id="Name" colLg="4" colMd="6" type="text" placeholder="Your Name" />
                        <TextBox id="Email" colLg="4" colMd="6" type="email" placeholder="Your Email" />
                        <TextBox id="Phone" colLg="4" colMd="6" type="text" placeholder="Phone" />
                        <TextBox id="Comment" colLg="12" colMd="12" type="textarea" placeholder="Comment" />
                        <center>
                            <ButtonWithArrowFilled name="Leave Message" />
                        </center>
                    </Row>
                </form>
            </Container>
        </section>
    );
}

export default Contact;