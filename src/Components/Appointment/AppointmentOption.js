import React from "react";

const AppointmentOption = ({ appoinments, setTreatment }) => {
  const { name, slots } = appoinments;
  return (
    <div className="card  w-96 bg-base-100 shadow-xl mt-10">
      <div className="card-body text-center">
        <h2 className="text-xl text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appoinments)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
