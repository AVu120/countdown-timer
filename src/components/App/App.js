import moment from "moment";
import React, { useEffect, useState } from "react";
import Countdown from "../Countdown/Countdown";
import Inputs from "../Inputs/Inputs";
import css from "./App.module.css";

const App = () => {
  const [eventName, setEventName] = useState("");
  const [datetimeSelected, setDatetimeSelected] = useState(moment());
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const changeEventName = (event) => setEventName(event.target.value);

  const changeDatetimeSelected = (selectedDatetime) => {
    setDatetimeSelected(selectedDatetime);
    if (
      typeof selectedDatetime !== "string" &&
      selectedDatetime - moment() > 0
    ) {
      const now = moment();
      const timeLeft = moment.duration(selectedDatetime.diff(now));

      setTimeLeft({
        days: timeLeft.days(),
        hours: timeLeft.hours(),
        minutes: timeLeft.minutes(),
        seconds: timeLeft.seconds(),
      });
    } else alert("Please select datetime in future.");
  };

  const resetCountdown = () => {
    setDatetimeSelected(moment());
    setTimeLeft({
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0",
    });
  };

  useEffect(() => {
    const startCountdown = setInterval(() => {
      const now = moment();
      const timeLeft = moment.duration(datetimeSelected.diff(now));
      if (timeLeft.asSeconds() > 0)
        setTimeLeft({
          days: timeLeft.days(),
          hours: timeLeft.hours(),
          minutes: timeLeft.minutes(),
          seconds: timeLeft.seconds(),
        });
      else clearInterval(startCountdown);
    }, 1000);
    return () => clearInterval(startCountdown);
  }, [datetimeSelected]);

  return (
    <div className={css.App}>
      <h1>Countdown Timer</h1>
      <Countdown timeLeft={timeLeft} />
      <Inputs
        eventName={eventName}
        changeEventName={changeEventName}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
        resetCountdown={resetCountdown}
      />
    </div>
  );
};

export default App;
