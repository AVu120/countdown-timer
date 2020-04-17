import React from "react";
import EventNameInput from "../common/Text-Input/Text-Input";
import DatetimeInput from "../common/Datetime-Input/Datetime-Input";

import css from "./Inputs.module.css";

export const Inputs = ({ changeEventName }) => {
  return (
    <div className={css.root}>
      <EventNameInput label="Event Name" onChange={changeEventName} />
      <DatetimeInput />
    </div>
  );
};

export default Inputs;
