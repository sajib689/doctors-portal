import React from "react";
import img from '../assets/images/doctor.png'
import bg from '../assets/images/appointment.png'
const DoctorInfo = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-12 px-6 "
    style={{
        background: `url(${bg})`
    }}>
      <div className="hero-content flex-col  lg:flex-row">
        <img
          alt=""
          src={img}
          className="lg:w-1/2  -mt-32 rounded-lg shadow-2xl"
        />
        <div className="px-12">
          <h1 className="text-3xl font-bold text-primary mt-3">Appointment</h1>
          <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
