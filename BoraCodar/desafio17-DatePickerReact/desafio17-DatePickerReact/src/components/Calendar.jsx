import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.moduele.css";

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className="text-center justify-center bg-zinc-900">
            <h2 className="text-3xl font-bold underline text-purple-800">
                Calendário Component
            </h2>
            <Calendar onChange={handleDateChange} value={selectedDate} />
            <p>Selected Date: {selectedDate.toString()}</p>
        </div>
    );
};

export default CalendarComponent;
