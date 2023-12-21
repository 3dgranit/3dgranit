import React from 'react';
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import TextFieldConnected from './TextFieldConnected';

const TextField = ({
  name,
  ...restProps
}) => (
  <>
    <Field
      name={name}
      component={TextFieldConnected}
      {...restProps}
    />
  </>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TextField.defaultProps = {
  validate: null,
  label: null,
};

export default TextField;
