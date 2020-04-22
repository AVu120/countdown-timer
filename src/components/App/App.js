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
    const now = moment();

    const diff = moment.duration(selectedDatetime.diff(now));
    console.log(diff.days(), diff.hours(), diff.minutes(), diff.seconds());
    // setDatetimeSelected(selectedDatetime);
    // const now = moment();
    // const countdown = moment(selectedDatetime - now);
    // const days = parseInt(countdown.format("D"));
    // const hours = parseInt(countdown.format("HH"));
    // const minutes = parseInt(countdown.format("mm"));
    // const seconds = parseInt(countdown.format("ss"));

    // if (typeof selectedDatetime !== "string" && selectedDatetime - moment() > 0)
    //   setTimeLeft({
    //     days,
    //     hours,
    //     minutes,
    //     seconds,
    //   });
    // else alert("Please select datetime in future.");
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
