import { useState } from "react";
import ReactDatePicker from "react-datepicker";

export const DatePicker = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    return (
        <ReactDatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
        />
    );
}