import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AppoinmentCalender from './AppoinmentCalender';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}>

            </AppoinmentBanner>
            <AppoinmentCalender selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}>
                
            </AppoinmentCalender>
        </div>
    );
};

export default Appointment;