import React from "react";
import img from '../assets/images/chair.png'
const Banner = () => {
  return (
    <div className="hero  bg-base-200 h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="img"
          src={img}
          className="max-w-lg `h-{355} w-{594}` rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="mt-5 btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
