import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";

const AppoinmentCalender = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const {data:appionmentOption = []} = useQuery({
    queryKey: ['appionmentOption'],
    queryFn: () => fetch("http://localhost:5000/appionmentOption")
    .then((res) => res.json())
  })

  return (
    <section className="mt-12">
      <p className="text-center text-primary">
        You have selected date: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {appionmentOption.map((appoinments) => (
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
