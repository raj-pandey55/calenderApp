import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import classNames from "classnames";

function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {setDaySelected, setShowEventModal, filterEvents, setSelectedEvent} = useContext(GlobalContext)

  useEffect(()=> {
    const events = filterEvents.filter(event => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
    setDayEvents(events);
  }, [filterEvents, day])


    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white rounded-full w-7" : "";
    };



  return (
    <div className={`border border-gray-200 flex flex-col`}>
      <header className="flex flex-col items-center">
        {rowIdx == 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 ${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
      <div className="flex-1 cursor-pointer" onClick={() => {
        setDaySelected(day)
        setShowEventModal(true)
      }}>
        {dayEvents.map((e, idx) => (
          <div key={idx} onClick={() => setSelectedEvent(e)} className={`bg-${e.label}-500 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}>{e.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Day;
