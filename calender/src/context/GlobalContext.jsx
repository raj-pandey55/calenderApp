import React from "react";

const GlobalContext = React.createContext({
    monthIdx: 0,
    setMonthIdx: (index) => {},
    smallCalenderMonth: 0,
    setSmallCalenderMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
});

export default GlobalContext;