import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '@material-ui/core';
import { getFormSyncErrors } from 'redux-form';

const FormButton = props => {

  // const [buttonIsDisable, setButtonIsDisable] = useState('false')

  console.log('111props111', props)

  const {
    color,
    variant,
    children,
    type,
    fullWidth,
    id,
    size
  } = props;

  // const setButtonState = async () => {
  //   const { buttonIsDisable } = this.state;
  //   const buttonState = await this.shouldDisableButton();
  //   if (buttonIsDisable !== buttonState) {
  //     setButtonIsDisable(buttonState)
  //   }
  // };

  // const shouldDisableButton = () => {
  //   const {
  //     form,
  //     requiredFields,
  //     syncErrors,
  //     exceptionFields,
  //     customDisabledButtonRule
  //   } = this.props;
  //   const { registeredFields = {}, values } = form;

  //   if (customDisabledButtonRule) {
  //     return true;
  //   }
  //   if (values && !Object.keys(syncErrors).length) {
  //     if (requiredFields.length) {
  //       return !!requiredFields.filter(
  //         requiredField => !exceptionFields.includes(requiredField)
  //           && (!Object.keys(values).includes(requiredField)
  //             || !`${values[requiredField]}`.length || values[requiredField] === null)
  //       ).length;
  //     }

  //     const registeredFieldsArray = Object.keys(registeredFields);

  //     return !!registeredFieldsArray.filter(
  //       requiredField => !exceptionFields.includes(requiredField)
  //         && (!Object.keys(values).includes(requiredField)
  //           || !`${values[requiredField]}`.length || values[requiredField] === null)
  //     ).length;
  //   }
  //   return true;
  // };

  return (
    <Button
    {...props}
      // disabled={buttonIsDisable}
      color={color}
      variant={variant}
      // onClick={this.handleClickButton}
      type={type}
      children={children}
    />
  )
}

FormButton.propTypes = {
  // syncErrors: PropTypes.shape(),
  // fullWidth: PropTypes.bool,
  // formId: PropTypes.string.isRequired
};

FormButton.defaultProps = {
  // requiredFields: [],
  // form: {},
  color: 'primary',
  variant: 'contained',
  // syncErrors: null,
  type: 'button',
};

const enhance = compose(
  connect((state, props) => ({
    form: state.form[props.formId],
    syncErrors: getFormSyncErrors(props.formId)(state)
  }))
);

export default enhance(FormButton);
