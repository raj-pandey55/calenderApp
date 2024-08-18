import React, { useEffect, useMemo, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, {type, payload}) {
  switch(type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map(event =>  event.id === payload.id ? payload : event);
    case 'delete':
      return state.filter(event => event.id !== payload.id);
    default:
      throw new Error();

  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

function ContextWrapper(props) {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);

  const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], initEvents);

  const filterEvents = useMemo(() => {
    return savedEvents.filter((event) => labels.filter((lbl) => lbl.checked)
      .map((lbl) => lbl.label)
      .includes(event.label)
  );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((event) => event.label))].map(label => {
        const currentLabel = prevLabels.find(lbl => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        }
      });
    })
  }, [savedEvents]);



  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIdx(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);

  useEffect(() => {
    if(!showEventModal) {
      setSelectedEvent(null);
    }
    
  }, [showEventModal])

  function updateLabel(label){
    setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl))
  }

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
        dispatchCallEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        labels,
        setLabels,
        updateLabel,
        filterEvents
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
