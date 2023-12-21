import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const DatePickerConnected = props => {
  const classes = useStyles();
  console.log(props)
  return (
    <TextField 
      variant="outlined"
      {...props.input}
      label={props.label}
      type="date"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth={props.fullWidth}
      style={{ width: '100%', margin: 0 }}
      minDate={new Date()}
    />     
  );
};

export default DatePickerConnected;
