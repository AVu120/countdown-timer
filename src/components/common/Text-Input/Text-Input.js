import React from "react";
import TextField from "@material-ui/core/TextField";

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
