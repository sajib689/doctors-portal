import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AppoinmentCalender = ({ selectedDate }) => {
  const [appoinment, setAppoinment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appionmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, []);
  return (
    <section className="mt-12">
      <p className="text-center text-primary">
        You have selected date: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {appoinment.map((appoinments) => (
          <AppointmentOption
            key={appoinments._id}
            appoinments={appoinments}
            setTreatment={setTreatment}
            
          ></AppointmentOption>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>}
    </section>
  );
};

export default AppoinmentCalender;
