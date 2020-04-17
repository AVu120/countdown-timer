import React from "react";
import EventNameInput from "../common/Text-Input/Text-Input";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";
import StartButton from "../common/buttons/Start-Button/Start-Button";

import css from "./Inputs.module.css";

export const Inputs = ({
  changeEventName,
  datetimeSelected,
  changeDatetimeSelected,
}) => {
  return (
    <div className={css.root}>
      <EventNameInput
        className={css.input}
        label="Event Name"
        onChange={changeEventName}
      />
      <DatetimeInput
        className={css.input}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
      />
      <StartButton />
    </div>
  );
};

export default Inputs;
