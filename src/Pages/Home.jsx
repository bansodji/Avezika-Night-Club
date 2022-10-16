import React from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Gallery from '../Components/Gallery';
import Services from '../Components/Services';
import TableReservation from '../Components/TableReservation';
import Team from '../Components/Team';
import Testimonial from '../Components/Testimonial';
import UpcommingEvents from '../Components/UpcommingEvent';

const Home = () => {
    return (
        <>
        <About/>
        <Team/>
        <Services/>
        <UpcommingEvents/>
        <Gallery/>
        <TableReservation/>
        <Testimonial/>
        <Contact/>
        </>
    );
}

export default Home;