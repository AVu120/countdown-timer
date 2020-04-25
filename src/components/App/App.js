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
  const [alarmDoneCount, setAlarmDoneCount] = useState(-1);

  const changeDatetimeSelected = (selectedDatetime) => {
    if (typeof selectedDatetime !== "string") {
      setDatetimeSelected(selectedDatetime);
    }
  };

  const startCountdown = () => {
    if (datetimeSelected - moment() > 0) {
      const now = moment();
      const timeLeft = moment.duration(datetimeSelected.diff(now));

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

  /* After user selects datetime, start countdown (decrementing by 1s).
  Countdown will stop when the component unmounts (i.e. when the user selects another datetime, causing the component to unmount then mount again).
  The countdown restarts when the component remounts. */
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
      else {
        clearInterval(startCountdown);
        setAlarmDoneCount(alarmDoneCount + 1);
      }
    }, 1000);
    return () => clearInterval(startCountdown);
  }, [timeLeft]);

  useEffect(() => {
    if (alarmDoneCount > 0) alert(`${eventName || "Event"} is starting now!`);
  }, [alarmDoneCount]);

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
