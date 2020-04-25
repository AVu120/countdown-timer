import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

const ActionButton = ({
  startButtonRootClassName,
  startButtonStyles,
  color,
  fontSize,
  actions,
}) => {
  const useStyles = makeStyles(startButtonStyles);

  const classes = useStyles();
  return (
    <div className={startButtonRootClassName}>
      <Tooltip title="Start Countdown" aria-label="add">
        <PlayArrowIcon
          classes={classes}
          color={color}
          fontSize={fontSize}
          onClick={() => actions.startCountdown()}
        />
      </Tooltip>
      <Tooltip title="Reset Timer to 0" aria-label="add">
        <RefreshIcon
          classes={classes}
          color={color}
          fontSize={fontSize}
          onClick={() => actions.resetCountdown()}
        />
      </Tooltip>
    </div>
  );
};

export default ActionButton;