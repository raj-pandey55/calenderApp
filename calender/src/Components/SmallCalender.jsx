import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

function SmallCalender() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIdx, setSmallCalenderMonth, setDaySelected, daySelected } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIdx);
  }, [monthIdx]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 text-white rounded-full";
    } else if(currDay === slcDay) {
      return "bg-blue-100 text-blue-600 font-bold rounded-full";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between ">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, j) => (
              <button onClick={()=> {
                setSmallCalenderMonth(currentMonthIdx)
                setDaySelected(day)
              }} key={j} className={`py-1 w-full ${getDayClass(day)}`}>
                <span className={`text-sm`}>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalender;
