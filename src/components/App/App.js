import moment from "moment";
import React, { useEffect, useState } from "react";
import Countdown from "../Countdown/Countdown";
import Inputs from "../Inputs/Inputs";
import css from "./App.module.css";
import alarmBellSoundFile from "../../sounds/alarm-clock-bell-sound.mp3";

const App = () => {
  const [eventName, setEventName] = useState("");
  const [datetimeSelected, setDatetimeSelected] = useState(moment());
  const [timeLeft, setTimeLeft] = useState({
    years: "0",
    months: "0",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
    countdownStatus: "idle",
  });
  // const alarmBellSound = new Audio(alarmBellSoundFile);
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
        years: timeLeft.years(),
        months: timeLeft.months(),
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
      years: "0",
      months: "0",
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
          years: currentTimeLeft.years(),
          months: currentTimeLeft.months(),
          days: currentTimeLeft.days(),
          hours: currentTimeLeft.hours(),
          minutes: currentTimeLeft.minutes(),
          seconds: currentTimeLeft.seconds(),
        });
      else {
        clearInterval(startCountdown);
        setTimeLeft({
          months: "0",
          days: "0",
          hours: "0",
          minutes: "0",
          seconds: "0",
          countdownStatus:
            timeLeft.countdownStatus === "idle"
              ? "idle"
              : timeLeft.countdownStatus === "running" ||
                timeLeft.countdownStatus === "done"
              ? "done"
              : "reset",
        });
      }
    }, 1000);
    return () => clearInterval(startCountdown);
  }, [timeLeft.countdownStatus]);

  /* Fire alarm & event notification only if timer successly counts down to 0,
     (timeLeft.countdownStatus === "done")
     not when application initially loads (timeLeft.countdownStatus === "idle")
     or when user restarts timer to 0 (timeLeft.countdownStatus === "restart") */
  useEffect(() => {
    if (timeLeft.countdownStatus === "done") {
      // alarmBellSound.play();
    }
  }, [timeLeft.countdownStatus]);

  const actions = { startCountdown, resetCountdown };
  return (
    <div className={css.app}>
      <h1
        className={
          timeLeft.countdownStatus !== "done"
            ? css.app__title
            : css.app__title_timerDone
        }
      >
        {timeLeft.countdownStatus !== "done"
          ? "Countdown Timer"
          : `${eventName || "Event"} has started!`}
      </h1>
      {timeLeft.countdownStatus === "done" && (
        <h3>
          Select another datetime and press play to start countdown again.
        </h3>
      )}
      <Countdown timeLeft={timeLeft} />
      <Inputs
        eventName={eventName}
        changeEventName={changeEventName}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
        actions={actions}
        timerStatus={timeLeft.countdownStatus}
      />
    </div>
  );
};

export default App;
