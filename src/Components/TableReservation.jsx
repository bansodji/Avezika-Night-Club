import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import $ from 'jquery';
import { ButtonWithArrowFilled } from './Buttons';

function TextBoxFocus(e) {
    let id = e.target.id;
    $('#' + id).css({ 'background': "rgba(255,255,255,0.2)" });
}
function TextBoxBlur(e) {
    let id = e.target.id;
    $('#' + id).css({ 'background': "rgba(255,255,255,0.05)" });
}

const TableReservation = () => {
    return (
        <section className='py-5'>
            <Container>
                <HeadingNdesc name="Table Reservation" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <form className='mt-5' action="">
                    <Row>
                        <TextBox id="Name" colLg="4" colMd="6" type="text" placeholder="Your Name" />
                        <TextBox id="Email" colLg="4" colMd="6" type="email" placeholder="Your Email" />
                        <TextBox id="Phone" colLg="4" colMd="6" type="text" placeholder="Phone" />
                        <TextBox id="Event" colLg="4" colMd="6" type="text" placeholder="Event" />
                        <TextBox id="Date" colLg="4" colMd="6" type="text" placeholder="Date" />
                        <TextBox id="PeopleCount" colLg="4" colMd="6" type="text" placeholder="Amount of people" />
                        <TextBox id="Comment" colLg="12" colMd="12" type="textarea" placeholder="Comment" />
                        <center>
                            <ButtonWithArrowFilled name="Make an order"/>
                        </center>
                    </Row>
                </form>
            </Container>
        </section>
    );
}

function TextBox(props) {
    return (
        <Col lg={props.colLg} md={props.colMd}>
            <div className='fff'>
                {(props.type != 'textarea') ? 
                    <input onFocus={TextBoxFocus} onBlur={TextBoxBlur} id={props.id} type={props.type} className='f-textbox-1 mb-4' placeholder={props.placeholder} />
                    : <textarea style={{height: '200px'}} id={props.id} onFocus={TextBoxFocus} onBlur={TextBoxBlur} type={props.type} className='f-textbox-1 mb-4' placeholder={props.placeholder} ></textarea>
                }
            </div>
        </Col>
    );
}

export default TableReservation;
export {TextBox};