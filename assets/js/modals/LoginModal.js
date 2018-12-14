import React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'

class LoginModal extends React.Component {
    state = {
      selectedUser: this.props.loggedInUser ? this.props.loggedInUser.email : '',
    }

    render() {
      const {
 open, users, setUser, loggedInUser 
} = this.props
      const { selectedUser } = this.state
      return (
        <Dialog
          open={open}
          // onClose={}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Sign in as
            </DialogContentText>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">User</InputLabel>
              <Select
                native
                value={selectedUser}
                onChange={e => this.setState({ selectedUser: e.target.value })}
                // inputProps={{
                //   name: 'age',
                //   id: 'age-native-simple',
                // }}
              >
                {[<option key="" value="" />].concat(users.map(user => (
                  <option key={user.email} value={user.email}>
                    {user.first_name}
                    {' '}
                    {user.last_name}
                  </option>
                )))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              // onClick={}
              color="primary"
              disabled={!selectedUser || !loggedInUser}

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
