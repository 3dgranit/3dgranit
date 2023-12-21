import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxGroupConnected from './CheckBoxGroupConnected';
import { Field } from 'redux-form';

const CheckBoxGroup = ({
  name,
  options,
  ...restProps
}) => {
  return (
    <Field name={name} component={CheckBoxGroupConnected} options={options} /> 
  );
}

CheckBoxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  optionsList: PropTypes.arrayOf(PropTypes.shape()),
};

CheckBoxGroup.defaultProps = {
  validate: null,
  optionsList: [],
};



export default CheckBoxGroup;
