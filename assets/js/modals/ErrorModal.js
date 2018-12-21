import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'

const Transition = props => (<Slide direction="up" {...props} />)

const ErrorModal = ({
  open, close, message, level,
}) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={close}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">
      {level || 'Error'}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {message || 'No description available'}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={close} color="primary">
              OK
      </Button>
    </DialogActions>
  </Dialog>
)

export default ErrorModal
