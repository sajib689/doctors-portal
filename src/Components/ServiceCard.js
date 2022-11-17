import React from "react";
import fluride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import ServiceCards from "./ServiceCards";
const ServiceCard = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];
  return (
    <div className="mt-[100px]">
      <div>
        <h6 className="text-primary font-bold text-center">OUR SERVICES</h6>
        <h1 className="text-3xl	text-center mt-5">Services We Provide</h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {serviceData.map((services) => (
          <ServiceCards key={services.id} services={services}></ServiceCards>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
