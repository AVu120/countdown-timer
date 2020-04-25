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
    countdownStatus: "idle",
  });
  const changeEventName = (event) => setEventName(event.target.value);
  const changeDatetimeSelected = (selectedDatetime) => {
    if (typeof selectedDatetime !== "string") {
      setDatetimeSelected(selectedDatetime);
    }
  };

  const startCountdown = () => {
    const now = moment();
    if (datetimeSelected - now > 0) {
      const timeLeft = moment.duration(datetimeSelected.diff(now));
      setTimeLeft({
        days: timeLeft.days(),
        hours: timeLeft.hours(),
        minutes: timeLeft.minutes(),
        seconds: timeLeft.seconds(),
        countdownStatus: "running",
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
      countdownStatus: "reset",
    });
  };

  /* After user selects datetime, start countdown (decrementing by 1s).
  Countdown will stop when the component unmounts (i.e. when the user selects another datetime, causing the component to unmount then mount again).
  The countdown restarts when the component remounts. */
  useEffect(() => {
    const startCountdown = setInterval(() => {
      const now = moment();
      const currentTimeLeft = moment.duration(datetimeSelected.diff(now));
      if (currentTimeLeft.asSeconds() > 0)
        setTimeLeft({
          ...timeLeft,
          days: currentTimeLeft.days(),
          hours: currentTimeLeft.hours(),
          minutes: currentTimeLeft.minutes(),
          seconds: currentTimeLeft.seconds(),
        });
      else {
        clearInterval(startCountdown);
        setTimeLeft({
          days: "0",
          hours: "0",
          minutes: "0",
          seconds: "0",
          countdownStatus:
            timeLeft.countdownStatus === "idle"
              ? "idle"
              : timeLeft.countdownStatus === "running"
              ? "done"
              : timeLeft.countdownStatus === "done"
              ? "done"
              : "reset",
        });
      }
    }, 1000);
    return () => clearInterval(startCountdown);
  }, [timeLeft]);

  /* Fire event alarm/notification only if timer successly counts down to 0,
     (timeLeft.countdownStatus === "done")
     not when application initially loads (timeLeft.countdownStatus === "idle")
     or when user restarts timer to 0 (timeLeft.countdownStatus === "restart") */
  useEffect(() => {
    if (timeLeft.countdownStatus === "done")
      alert(`${eventName || "Event"} is starting now!`);
  }, [timeLeft.countdownStatus]);

  const actions = { startCountdown, resetCountdown };
  return (
    <div className={css.App}>
      <h1>Countdown Timer</h1>
      <Countdown timeLeft={timeLeft} />
      <Inputs
        eventName={eventName}
        changeEventName={changeEventName}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
        actions={actions}
      />
    </div>
  );
};

export default App;
