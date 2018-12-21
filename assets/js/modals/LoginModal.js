import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

class LoginModal extends React.Component {
    state = {
      selectedUser: '',
    }

    render() {
      const {
        open, users, setUser, loggedInUser, close,
      } = this.props
      const { selectedUser } = this.state
      return (
        <Dialog
          open={open}
          // onClose={}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
          <DialogContent style={{minWidth: '300px'}}>
            <DialogContentText>
                Sign in as
            </DialogContentText>
            <FormControl style={{ width: '100%' }}>
              <InputLabel htmlFor="age-native-simple">User</InputLabel>
              <Select
                style={{ width: '100%' }}
                value={selectedUser || (loggedInUser ? loggedInUser.email : '')}
                onChange={e => this.setState({ selectedUser: e.target.value })}
                // inputProps={{
                //   name: 'age',
                //   id: 'age-native-simple',
                // }}
              >
                {[<MenuItem key="" value="" />].concat(users.map(user => (
                  <MenuItem key={user.email} value={user.email}>
                    {user.first_name}
                    {' '}
                    {user.last_name}
                  </MenuItem>
                )))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={close}
              color="primary"
              disabled={!selectedUser && !loggedInUser}

            >
              Cancel
            </Button>
            <Button
              onClick={() => setUser(selectedUser)}
              color="primary"
              disabled={!selectedUser}
            >
              Sign in
            </Button>
          </DialogActions>
        </Dialog>
      )
    }
}

export default LoginModal
