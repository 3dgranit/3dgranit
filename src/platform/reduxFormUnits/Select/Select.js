import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import SelectConnected from './SelectConnected';

const Select = ({
  name,
  ...restProps
}) => {
  console.log('restProps', restProps)
  return (
    <Field
      name={name}
      component={SelectConnected}
      restProps={restProps}
  />
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,

};
Select.defaultProps = {

};

export default Select;