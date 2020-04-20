import React from "react";
import PlayIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { makeStyles } from "@material-ui/core/styles";

const StartButton = ({
  startButtonRootClassName,
  startButtonStyles,
  color,
  fontSize,
  onClick,
}) => {
  const useStyles = makeStyles(startButtonStyles);

  const classes = useStyles();
  return (
    <div onClick={onClick} className={startButtonRootClassName}>
      <PlayIcon classes={classes} color={color} fontSize={fontSize} />
    </div>
  );
};

export default StartButton;
