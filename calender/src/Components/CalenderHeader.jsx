import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

function CalenderHeader() {
  const { monthIdx, setMonthIdx } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIdx(monthIdx - 1);
  }

  function handleNextMonth() {
    setMonthIdx(monthIdx + 1);
  }

  function handleReset() {
    setMonthIdx(
      monthIdx === dayjs().month() ? monthIdx + Math.random() : dayjs().month()
    );
  }

  return (
    <div>
      <header className="px-4 py-2 flex items-center">
        <img src={logo} alt="calender logo" className="mr-2 w-12 h-12" />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
        <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
          Today
        </button>
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
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIdx)).format("MMMM YYYY")}
        </h2>
      </header>
    </div>
  );
}

export default CalenderHeader;
