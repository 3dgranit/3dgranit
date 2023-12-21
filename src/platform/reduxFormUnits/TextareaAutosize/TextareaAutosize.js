import React from 'react';
import { Field } from 'redux-form'
import PropTypes from 'prop-types';
import TextFieldConnected from './TextareaAutosizeConnected';

const TextareaAutosize = ({
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

TextareaAutosize.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TextareaAutosize.defaultProps = {
  validate: null,
  label: null,
};

export default TextareaAutosize;
