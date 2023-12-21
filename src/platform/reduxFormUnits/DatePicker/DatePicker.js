import React from 'react';
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import DatePickerConnected from './DatePickerConnected';

const DatePicker = ({
  name,
  ...restProps
}) => (
    <Field
      name={name}
      component={DatePickerConnected}
      {...restProps}
    />
);

DatePicker.propTypes = {
  // name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

DatePicker.defaultProps = {
  validate: null,
  label: null,
};

export default DatePicker;
