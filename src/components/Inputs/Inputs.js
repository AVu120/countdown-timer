import React from "react";
import EventNameInput from "../common/Text-Input/Text-Input";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";
import ResetButton from "../common/Buttons/Reset-Button";

import css from "./Inputs.module.css";

export const Inputs = ({
  changeEventName,
  datetimeSelected,
  changeDatetimeSelected,
  resetCountdown,
}) => {
  return (
    <div className={css.inputs}>
      <EventNameInput
        className={css.input_item}
        label="Event Name"
        onChange={changeEventName}
      />
      <DatetimeInput
        className={css.input_item}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
      />
      <ResetButton
        startButtonRootClassName={css.input_startButton}
        startButtonStyles={{
          root: {
            padding: "10px",
          },
          fontSizeLarge: {
            padding: "10px",
          },
        }}
        fontSize={"large"}
        onClick={resetCountdown}
      />
    </div>
  );
};

export default Inputs;
