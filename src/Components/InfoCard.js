import React from "react";

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
  return (
    <div className={`card px-6 mt-12 card-side  shadow-xl ${bgClass}`}>
      <figure >
        <img className="" src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">{description}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
