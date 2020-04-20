import React, { useState, useEffect } from "react";
import moment from "moment";
import css from "./App.module.css";
import Countdown from "../Countdown/Countdown";
import Inputs from "../Inputs/Inputs";

const App = () => {
  const [eventName, setEventName] = useState("");
  const [datetimeSelected, setDatetimeSelected] = useState(moment());
  const [countingInProgress, setCountingInProgress] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const changeEventName = (event) => setEventName(event.target.value);
  const changeDatetimeSelected = (selectedDatetime) => {
    const selectedLocalDatetime = moment.utc(selectedDatetime).local();
    if (
      typeof selectedDatetime !== "string" &&
      selectedLocalDatetime - moment() >= 0
    ) {
      setDatetimeSelected(selectedLocalDatetime);
      const now = moment();
      const countdown = moment(selectedLocalDatetime - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  // useEffect(() => {
  //   if (countingInProgress)
  //     setInterval(() => {
  //       const countdown = datetimeSelected - moment();
  //       const days = countdown.format("D");
  //       const hours = countdown.format("HH");
  //       const minutes = countdown.format("mm");
  //       const seconds = countdown.format("ss");
  //       setTimeLeft({
  //         days,
  //         hours,
  //         minutes,
  //         seconds,
  //       });
  //     }, 1000);
  // }, [countingInProgress]);

  return (
    <div className={css.root}>
      <h1>Placeholder Countdown Timer Title</h1>
      <Countdown timeLeft={timeLeft} />
      <Inputs
        eventName={eventName}
        changeEventName={changeEventName}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
      />
    </div>
  );
};

export default App;
