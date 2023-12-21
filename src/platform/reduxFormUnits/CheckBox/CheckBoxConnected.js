import React from 'react';
import { Checkbox } from '@material-ui/core'

const CheckBoxConnected = props => {
  console.log('props11111', props)

  const onChangeHandler = (e) => {
    console.log(e)
  }
  return (

    <Checkbox 
      label={props.label}
      checked={props.input.value ? true : false}
      onChange={onChangeHandler}
    />     
  );
};

export default CheckBoxConnected;
