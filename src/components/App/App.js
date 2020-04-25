import React, { useState, useEffect } from "react";
import moment from "moment";
import css from "./App.module.css";
import Countdown from "../Countdown/Countdown";
import Inputs from "../Inputs/Inputs";

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
  // const [countdownInProgress, setCountdownInProgress] = useState(false);

  // const updateCount = () => {
  //   const now = moment();
  //   const timeLeft = moment.duration(datetimeSelected.diff(now));
  //   if (timeLeft.asSeconds() > 0)
  //     setTimeLeft({
  //       days: timeLeft.days(),
  //       hours: timeLeft.hours(),
  //       minutes: timeLeft.minutes(),
  //       seconds: timeLeft.seconds(),
  //     });
  //   else clearInterval(countdownTimer);
  // };

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

  // const updateCount = () => {
  //   const now = moment();
  //   const currentTimeLeft = moment.duration(datetimeSelected.diff(now));
  //   if (currentTimeLeft.asSeconds() > 0)
  //     setTimeLeft({
  //       days: currentTimeLeft.days(),
  //       hours: currentTimeLeft.hours(),
  //       minutes: currentTimeLeft.minutes(),
  //       seconds: currentTimeLeft.seconds(),
  //     });
  //   else clearInterval(countDown);
  // };

  // const startCountdown = () => {
  //   // const startCountdown = countDown;
  // };

  // const resetCountdown = () => {
  //   const now = moment();
  //   setTimeLeft(now);
  // };
  // const userActions = { startCountdown, resetCountdown };

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
      <h1>Placeholder Countdown Timer Title</h1>
      <Countdown timeLeft={timeLeft} />
      <Inputs
        eventName={eventName}
        changeEventName={changeEventName}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
        // userActions={userActions}
      />
    </div>
  );
};

export default App;
