import React from "react";

const Title = ({ timeLeft, eventName, titleClassName }) => {
  return (
    <div>
      <h1 className={titleClassName}>
        {timeLeft.countdownStatus !== "done"
          ? "Countdown Timer"
          : `${eventName || "Event"} has started!`}
      </h1>
      {timeLeft.countdownStatus === "done" && (
        <h3>
          Select another datetime and press play to start countdown again.
        </h3>
      )}
    </div>
  );
};

export default Title;
