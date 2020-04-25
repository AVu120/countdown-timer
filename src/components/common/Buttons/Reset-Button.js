import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
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
    <div className={startButtonRootClassName}>
      <RefreshIcon
        classes={classes}
        color={color}
        fontSize={fontSize}
        onClick={onClick}
      />
    </div>
  );
};

export default StartButton;
