import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext)
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const slots = form.slots.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
        appointmentDate: date,
        treatment: name,
        name: fullName,
        slots,
        phone,
        email
    }
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // setTreatment(null)
      toast.success('Booking success')
    })


  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 name='name' className="text-lg font-bold text-center">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1">
            <input
            name='date'
              type="text"
              value={date}
              className=" mt-5 input input-bordered w-full "
              readOnly
            />
            <select name="slots" className="select select-bordered w-full  mt-3" readOnly>
              {slots.map((slot,i) => (
                <option value={slot} key={i}>{slot}</option>
              ))}
            </select>
            <input
            defaultValue={user?.displayName}
            name='fullName'
              type="text"
              placeholder="Full Name"
              className="mt-3 input input-bordered w-full "
              readOnly
              
            />
            <input
            
            name='phone'
              type="text"
              placeholder="Phone Number"
              className="mt-3 input input-bordered w-full "
            />
            <input
            defaultValue={user?.email}
            name="email"
              type="email"
              placeholder="Email"
              className="mt-3 input input-bordered w-full "
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full mt-4 btn btn-black"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
