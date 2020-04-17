import React, { useState } from "react";
import css from "./App.module.css";
import Countdown from "../Countdown/Countdown";
import Inputs from "../Inputs/Inputs";

const App = () => {
  const [eventName, setEventName] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  const changeEventName = (event) => setEventName(event.target.value);

  return (
    <div className={css.root}>
      <h1>Placeholder Countdown Timer Title</h1>
      <Countdown
        days={daysLeft}
        hours={hoursLeft}
        minutes={minutesLeft}
        seconds={secondsLeft}
      />
      <Inputs eventName={eventName} changeEventName={changeEventName} />
    </div>
  );
};

export default App;
