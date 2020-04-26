import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";
import React, { useEffect } from "react";

const ActionButton = ({
  startButtonRootClassName,
  startButtonStyles,
  color,
  fontSize,
  actions,
  timerStatus,
}) => {
  const useStyles = makeStyles(startButtonStyles);

  const classes = useStyles();

  useEffect(() => {
    console.log(timerStatus);
  }, [timerStatus]);
  return (
    <div className={startButtonRootClassName}>
      {(timerStatus === "idle" ||
        timerStatus === "reset" ||
        timerStatus === "done") && (
        <Tooltip title="Start Countdown" aria-label="add">
          <PlayArrowIcon
            classes={classes}
            color={color}
            fontSize={fontSize}
            onClick={() => actions.startCountdown()}
          />
        </Tooltip>
      )}
      {timerStatus === "running" && (
        <Tooltip title="Reset Timer to 0" aria-label="add">
          <RefreshIcon
            classes={classes}
            color={color}
            fontSize={fontSize}
            onClick={() => actions.resetCountdown()}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default ActionButton;
