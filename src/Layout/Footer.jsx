import React from 'react';
import { Container } from 'react-bootstrap';

const bg = {
    backgroundColor: "rgba(255,255,255,0.1)"
}

const Footer = () => {
    return (
        <footer className='py-4 fff' style={bg}>
            <Container>
                <center>
                    <h6 className='fff-50'>© 2022, Avezika. All Rights Reserved.</h6>
                </center>
            </Container>
        </footer>
    );
}

export default Footer;