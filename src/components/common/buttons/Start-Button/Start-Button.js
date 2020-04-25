import React from "react";
import PlayIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { makeStyles } from "@material-ui/core/styles";

const StartButton = ({
  startButtonRootClassName,
  startButtonStyles,
  color,
  fontSize,
  userActions,
}) => {
  const useStyles = makeStyles(startButtonStyles);

  const classes = useStyles();
  return (
    <div className={startButtonRootClassName}>
      <PlayIcon
        classes={classes}
        color={color}
        fontSize={fontSize}
        // onClick={() => userActions.startCountdown()}
      />
    </div>
  );
};

export default StartButton;
