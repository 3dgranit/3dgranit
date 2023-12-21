import React from 'react';
import { Select } from '@material-ui/core';
// import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SelectConnected = (props) => {

  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel htmlFor="outlined-age-native-simple">{props.restProps.label}</InputLabel>
      <Select
        fullWidth={props.fullWidth}
        native
        value={props.input.value}
        onChange={(value) => props.input.onChange(value)}
        onBlur={(value) => props.input.onBlur(value)}
        label={props.restProps.label}
        name= {props.input.name}
      >
        <option aria-label="None" value="" />

        {
          props.restProps.option.map(({label, value}) => {
            return (
              <option value={value}>{label}</option>
            )
          })
        }
      </Select>
    </FormControl>
  );
};

SelectConnected.propTypes = {

}

export default SelectConnected;
