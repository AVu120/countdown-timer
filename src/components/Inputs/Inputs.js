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
        inputStyle={{ height: "15px", width: "10vw", fontSize: "2vh" }}
        labelStyle={{ fontSize: "2vh" }}
      />
      <DatetimeInput
        className={css.input_item}
        datetimeSelected={datetimeSelected}
        changeDatetimeSelected={changeDatetimeSelected}
      />
      <ActionButton
        startButtonRootClassName={css.input_startButton}
        iconStyle={{
          root: {
            padding: "1vh",
          },
          fontSizeLarge: {
            padding: "1vh",
            fontSize: "4.5vh",
          },
        }}
        labelStyle={{}}
        fontSize={"large"}
        actions={actions}
        timerStatus={timerStatus}
        color="primary"
      />
    </div>
  );
};

export default Inputs;
