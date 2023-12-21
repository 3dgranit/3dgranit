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

const TimePickerConnected = props => {
  const classes = useStyles();
  console.log(props)
  return (
    <form className={classes.container} noValidate>
      <TextField
        variant="outlined"
        {...props.input}
        label={props.label}
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        fullWidth={props.fullWidth}
        style={{ width: '100%' }}
      />
    </form>     
  );
};

export default TimePickerConnected;
