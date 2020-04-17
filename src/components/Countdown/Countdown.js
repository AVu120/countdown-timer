import React from "react";
import CountdownItem from "./Countdown-Item/Countdown-Item";
import css from "./Countdown.module.css";

const Countdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={css.countdown__wrapper}>
      <CountdownItem value={days} title="DAYS" />
      <CountdownItem value={hours} title="HOURS" />
      <CountdownItem value={minutes} title="MINUTES" />
      <CountdownItem value={seconds} title="SECONDS" />
    </div>
  );
};

export default Countdown;
