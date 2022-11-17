import React from "react";

const ReviewCard = ({ review }) => {
  const { name, description, icon, country } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="">{description}</p>
        <div className="flex items-center mt-9">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="px-3.5">
            <h1 className="card-title text-xl">{name}</h1>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
