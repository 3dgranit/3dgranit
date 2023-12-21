import React from 'react';
import { useStyles } from './styles/styles.js'
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from '@material-ui/core';
import InlineSVG from 'svg-inline-react';

import iconSuccess from './images/success.svg'
import iconError from './images/error.svg'

const Modal = ({isPopup }) => {
  console.log('props', isPopup)
  const classes = useStyles();

  return (
    <div className={`${classes.modal} ${isPopup.isPopup && 'action'}`}>
      <Grid container className={classes.content}>
        <Grid item xs={12} className="modal-header">
          <Box
            component={InlineSVG}
            src={isPopup.icon === 'success' ? iconSuccess : iconError}
            raw
            height={80}
            display="block"
            mx="auto"
            style={{
              fill: isPopup.icon === 'success' ? '#439867' : '#d46666' 
            }}
          />
          
        </Grid>
        <Grid item xs={12} className="modal-body">
          <Typography variant="h5">{isPopup.text}</Typography>
          
        </Grid>
      </Grid>
    </div>
  )
}

Modal.propTypes = {
  // isPopup: PropTypes.bool.isRequired
}


const enhance = compose(
  connect(state => {
    return {
      isPopup: state.userReducer.popup
    }
  })
)

export default enhance(Modal)
