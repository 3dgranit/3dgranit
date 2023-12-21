import React from 'react';
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import TimePickerConnected from './TimePickerConnected';

const TimePicker = ({
  name,
  ...restProps
}) => (
    <Field
      name={name}
      component={TimePickerConnected}
      {...restProps}
    />
);

TimePicker.propTypes = {
  // name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TimePicker.defaultProps = {
  validate: null,
  label: null,
};

export default TimePicker;
