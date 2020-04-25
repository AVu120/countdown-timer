import React from "react";
import EventNameInput from "../common/Text-Input/Text-Input";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";
import StartButton from "../common/buttons/Start-Button/Start-Button";

import css from "./Inputs.module.css";

export const Inputs = ({
  changeEventName,
  datetimeSelected,
  changeDatetimeSelected,
  userActions,
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
      <StartButton
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
        userActions={userActions}
      />
    </div>
  );
};

export default Inputs;
