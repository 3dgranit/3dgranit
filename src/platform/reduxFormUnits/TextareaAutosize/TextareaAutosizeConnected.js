import React from 'react';
import { TextareaAutosize, TextField } from '@material-ui/core';

const TextareaAutosizeConnected = props => {
  return (
    // <TextareaAutosize 
    //   {...props.input}
    //   rowsMin={3}
    //   placeholder="Minimum 3 rows"
    //   style={{
    //     width: '100%'
    //   }}
    // />     
    <TextField
      {...props}
      {...props.input}
      multiline
      rows={2}
      variant="outlined"
      fullWidth
      color="secondary"
    />
  );
};

export default TextareaAutosizeConnected;
