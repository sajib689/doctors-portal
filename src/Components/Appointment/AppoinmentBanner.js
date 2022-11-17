import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
 
  return (
    <div className="hero mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div>
        <img alt="" src={chair} className="max-w-lg rounded-lg shadow-2xl" />
        </div>
        <div className="mx-24">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
