import React from "react";
import bg from '../assets/images/appointment.png'
const Contact = () => {
  return (
    <div className="hero"
    style={{
        background: `url(${bg})`
    }}>
      <div className="hero-content  w-2/5">
        <div className="card w-full shadow-2xl ">
            <div className="mt-3">
                <h1 className="text-primary text-xl text-center">Contact Us</h1>
                <h1 className="text-white text-3xl text-center">Stay connected with us</h1>
            </div>
          <div className="card-body mt-5">
            <div className="form-control ">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
              <textarea
                className="textarea textarea-bordered mt-3"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
