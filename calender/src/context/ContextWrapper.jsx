import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIdx(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIdx,
        setMonthIdx,
        smallCalenderMonth,
        setSmallCalenderMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
