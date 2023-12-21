import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CircularProgress, Modal } from '@material-ui/core/';

 const Loader = ({ isLoading }) => {
  return (
    <Modal
      role="progressbar"
      disableEnforceFocus
      disableAutoFocus
      disableEscapeKeyDown
      open={isLoading}
      aria-labelledby="loader"
      hideBackdrop
      closeAfterTransition
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        background: 'rgba(0,0,0,.5)'
      }}
    >
      <CircularProgress color="primary" style={{ outline: 'none' }} />
    </Modal>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}


const enhance = compose(
  connect(state => {
    return {
      isLoading: state.userReducer.loading
    }
  })
)

export default enhance(Loader)
