import React from 'react';
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import CheckBoxConnected from './CheckBoxConnected';

const CheckBox = ({
  name,
  ...restProps
}) => (
  <>
    <Field
      name={name}
      component={CheckBoxConnected}
      {...restProps}
    />
  </>
);

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

CheckBox.defaultProps = {
  validate: null,
  label: null,
};

export default CheckBox;
