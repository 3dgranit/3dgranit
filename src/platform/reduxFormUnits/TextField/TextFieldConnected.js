import React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldConnected = ({ input, label, type, meta: { touched, error, warning }, placeholder, variant, fullWidth }) => {
  return (
    <TextField 
      {...input}
      label={label}
      type={type}
      placeholder={placeholder}
      variant={variant}
      fullWidth={fullWidth}
      color="secondary"
      error={(touched && error) && true}
    /> 
  
  );
};

export default TextFieldConnected;
