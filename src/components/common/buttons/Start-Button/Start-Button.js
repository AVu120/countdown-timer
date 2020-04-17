import React from "react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

const StartButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <PlayCircleFilledWhiteIcon />
    </div>
  );
};

export default StartButton;
