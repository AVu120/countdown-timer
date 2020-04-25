import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

const StartButton = ({
  startButtonRootClassName,
  startButtonStyles,
  color,
  fontSize,
  onClick,
  tooltipLabel,
}) => {
  const useStyles = makeStyles(startButtonStyles);

  const classes = useStyles();
  return (
    <div className={startButtonRootClassName}>
      <Tooltip title={tooltipLabel} aria-label="add">
        <RefreshIcon
          classes={classes}
          color={color}
          fontSize={fontSize}
          onClick={onClick}
        />
      </Tooltip>
    </div>
  );
};

export default StartButton;
