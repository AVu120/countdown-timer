import React, { useEffect } from "react";
import CountdownItem from "./Countdown-Item/Countdown-Item";
import css from "./Countdown.module.css";

const Countdown = ({ timeLeft }) => {
  return (
    <div className={css.countdown__wrapper}>
      <CountdownItem value={parseInt(timeLeft.days)} title="DAYS" />
      <CountdownItem value={parseInt(timeLeft.hours)} title="HOURS" />
      <CountdownItem value={parseInt(timeLeft.minutes)} title="MINUTES" />
      <CountdownItem value={parseInt(timeLeft.seconds)} title="SECONDS" />
    </div>
  );
};

export default Countdown;
