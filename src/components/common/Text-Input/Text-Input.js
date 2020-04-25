import TextField from "@material-ui/core/TextField";
import React from "react";

const TextInput = ({ label, onChange, className }) => (
  <form className={className} noValidate autoComplete="off">
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={onChange}
    />
  </form>
);

export default TextInput;
