import React from "react";
import img from '../assets/images/treatment.png'
const DentalCare = () => {
  return (
    <div className="hero bg-base-200  px-12  mt-12">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <img
          alt=""
          src={img}
          className="max-w-sm rounded-lg shadow-2xl w-[458] h-[576]"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader
           will be distracted by the readable content of 
           a page when looking at its layout. The point of
            using Lorem Ipsumis that it has a more-or-less 
            normal distribution of letters,as opposed to using 
            'Content here, content here', making it look like readable 
            English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
