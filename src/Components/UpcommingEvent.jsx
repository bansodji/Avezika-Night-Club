import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import UpcommingEventData from '../Data/UpcommingEventsData';
import e1_img1 from "../Images/event/oct15/event1.jpg";
import bg from "../Images/event-bg.jpg";
import $ from 'jquery';
let $id;
let Events = [];

$(document).ready(function () {

    // Initial Data Load start
    let initBtnId = "btn-" + UpcommingEventData[0].id;
    $(`#${initBtnId}`).addClass("btn-bg fff");
    Events = UpcommingEventData[0].events;
    for (let data of Events) {
        let img = $(`<div class="my-4"><img id="img-${data.id}" src=${data.image} class="circle-img-x f-border-1-hover cursor-pointer" /></div>`);
        $("#clickableEvent").append(img);
    }
    $(`#img-1`).addClass("e-border-1");
    // Initial Data Load end

    // On click event image load data start
    $("#clickableEvent").on('click', function (e) {
        let $ImgId = e.target.id;
        let $EventId = $ImgId.split("-")[1];

        for (let x of Events) {
            if ($EventId == x.id) {
                $(`#img-${x.id}`).addClass("e-border-1");
                $("#EventName").html(`"${x.name}"`);
                $("#EventDesc").html(x.desc);
                $("#EventTime").html(x.time);
                $("#EventFee").html(`$${x.fee}`);
                $("#EventImg").attr("src", x.image);
            }
            else {
                $(`#img-${x.id}`).removeClass("e-border-1");
            }
        }

    });
    // On click event image load data end
});

function getEventDate(event) {  //Load image when button click
    $("#clickableEvent").empty();
    $id = event.currentTarget.id;
    $id = $id.split("-")[1];

    for (let data of UpcommingEventData) {
        if ($id == data.id) {
            $(`#btn-${$id}`).addClass("btn-bg fff");
            Events = data.events;
        }
        else {
            console.log(data.id);
            $(`#btn-${data.id}`).removeClass("btn-bg fff");
        }
    }

    for (let data of Events) {
        let img = $(`<div class="my-4"><img id="img-${data.id}" src=${data.image} class="circle-img-x f-border-1-hover cursor-pointer" /></div>`);
        $("#clickableEvent").append(img);
    }

}

const UpcommingEvents = () => {
    return (
        <section className='py-5 event-bg'>
            <Container>
                <HeadingNdesc name="Upcomming Events" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <div className='size-100 my-4'>
                    <center>
                        {UpcommingEventData.map((data) => (
                            <button onClick={getEventDate} id={`btn-${data.id}`} className="f-btn-3 mx-3">{data.date}</button>
                        ))}
                    </center>
                </div>

                <Row className='mt-5'>
                    <Col lg="2">
                        <Row>
                            <Col lg="12">
                                <center>
                                    <div className='my-4' id="clickableEvent">
                                    </div>
                                </center>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="10" className='size-100'>
                        <Row className='size-100 g-0'>
                            <Col lg="6" className='size-100'>
                                <div style={{ height: "32rem" }} className='d-flex align-items-center size-100 p-5 bg-1'>
                                    <div>
                                        <h5 id='EventName' className='heading uppercase fff text-center'>“REFRESH YOUR MIND”</h5>
                                        <p id='EventDesc' className='text-center my-4'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commouis nosconsectetur</p>
                                        <h6 id='EventTime' className='fff-50 text-center'>START AT 8.30 PM</h6>
                                        <center>
                                            <div className='entrance-price-box mt-4 py-4'>
                                                <h1 id='EventFee' className='heading text-center fff'>$30</h1>
                                                <h5 className='fff text-center'>Entrance</h5>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" className='size-100'>
                                <div className='size-100'>
                                    <img style={{ height: "32rem" }} id='EventImg' src={e1_img1} className="size-100" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default UpcommingEvents;