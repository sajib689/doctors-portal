import React from 'react';
import Banner from './Banner';
import DentalCare from './DentalCare';
import InfoCards from './InfoCards';
import ServiceCard from './ServiceCard';
import DoctorInfo from './DoctorInfo';
import Testimonial from './Testimonial';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCard></ServiceCard>
            <DentalCare></DentalCare>
            <DoctorInfo></DoctorInfo>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;