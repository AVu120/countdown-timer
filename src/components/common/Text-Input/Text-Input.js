import React from "react";
import TextField from "@material-ui/core/TextField";

import css from "./Text-Input.module.css";

const TextInput = ({ label, onChange }) => (
  <form className={css.root} noValidate autoComplete="off">
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={onChange}
    />
  </form>
);

export default TextInput;
