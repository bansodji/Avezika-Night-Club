import React from 'react';
import { Container } from 'react-bootstrap';
import { HeadingNdesc } from './Headings';
import "../gallery.scss";
import { GalleryImages } from '../Data/GalleryImages';
import $ from 'jquery';
import CloseIcon from '@mui/icons-material/Close';

$(document).ready(function () {
    $("#image-presenter").hide();
});

const ImgPresenter = {
    width: '95%',
    height: '95vh',
    overflow: 'hidden',
    backgroundColor: '#000',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: "1000000000"
}

const closeImgStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#fff',
    cursor: 'pointer'
}

function showImage(image) {
    $("#largeImage").attr('src', image);
    $("#image-presenter").show('slow');
}

function closeImg() {
    $("#image-presenter").hide('slow');
}

const Gallery = () => {
    return (
        <section className='py-5 position-relative'>
            <Container>
                <HeadingNdesc name="Gallery" desc1="Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" desc2="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />

                <div className="gallery">
                    {GalleryImages.map((data, index) => (
                        <div className="pics" key={index}>
                            <img src={data.image} alt="" style={{ width: '100%' }} onClick={() => showImage(data.image)} />
                        </div>
                    ))}
                </div>
            </Container>
            <div id='image-presenter' className='image-presenter position-fixed' style={ImgPresenter}>
                <Container>
                    <div onClick={closeImg} className='close-image' style={closeImgStyle}>
                        <CloseIcon />
                    </div>
                    <center>
                        <img style={{height: '95vh', width: 'auto'}} id='largeImage' src='https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
                    </center>
                </Container>
            </div>
        </section>
    );
}

export default Gallery;