import React from "react";
import ActionButton from "../common/Buttons/Action-Button";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";
import EventNameInput from "../common/Text-Input/Text-Input";
import css from "./Inputs.module.css";

export const Inputs = ({
  changeEventName,
  datetimeSelected,
  changeDatetimeSelected,
  actions,
  timerStatus,
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
      <ActionButton
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
        actions={actions}
      />
    </div>
  );
};

export default Inputs;
