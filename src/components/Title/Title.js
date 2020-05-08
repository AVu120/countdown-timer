import React from "react";
import HelpIcon from "../common/Icons/HelpIcon";
import css from "./Title.module.css";

const Title = ({ timeLeft, eventName, titleClassName }) => {
  return (
    <div className={css.title}>
      <div className={css.title__topRow}>
        <h1 className={titleClassName}>
          {timeLeft.countdownStatus !== "done"
            ? "Countdown Timer"
            : `${eventName || "Event"} has started!`}
        </h1>
        <div className={css.title__helpIcon}>
          <HelpIcon
            title={
              <div>
                <h3>Instructions:</h3>
                <p>
                  1. Enter the name of the event you want to count down to using
                  the 1st input.
                </p>
                <p>
                  2. Select the date and time when this event starts using the
                  2nd input.
                </p>
                <p>
                  3. Click the play button to start the countdown to the event.
                </p>
                <p>
                  4. Click the reset button during the countdown to stop and
                  reset the countdown to 0.
                </p>
              </div>
            }
            iconStyle={{ fontSize: "3vh" }}
          />
        </div>
      </div>
      {timeLeft.countdownStatus === "done" && (
        <h3 className={css.title__doneMessage}>
          Select another datetime and press play to start countdown again.
        </h3>
      )}
    </div>
  );
};

export default Title;
