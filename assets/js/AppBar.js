import React from 'react'
import MUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

class AppBar extends React.Component {
  state = {
    profileMenuEl: null,
  }


  render() {
    const { openLoginModal, onMenuClick, loggedInUser } = this.props
    const { profileMenuEl } = this.state
    return (
      <div style={{ flexGrow: 1, marginBottom: '20px' }}>
        <MUIAppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              Resco Stick
            </Typography>
            {loggedInUser && (
            <div style={{ textAlign: 'center' }}>
              <Typography color="inherit" variant="button" style={{ padding: '5px', display: 'inline' }}>
                {loggedInUser ? `${loggedInUser.first_name}` : ''}
              </Typography>
              <IconButton
              // aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={e => this.setState({ profileMenuEl: e.currentTarget })}
                ref={this.profileButtonRef}
              >
                  <Icon>person</Icon>
                {/* <Icon>arrow_drop_down</Icon> */}
              </IconButton>
              <Menu
                id="simple-menu"
                open={!!profileMenuEl}
                onClose={() => this.setState({ profileMenuEl: null })}
                anchorEl={profileMenuEl}
              >
                <MenuItem onClick={() => {
                  openLoginModal()
                  this.setState({ profileMenuEl: null })
                }}
                >
                  Logout
                </MenuItem>
              </Menu>
              {/* <Button color="inherit" variant="outlined" onClick={openLoginModal} style={{ marginBottom: '5px' }}>Change user</Button> */}
            </div>
            )

          }
          </Toolbar>
        </MUIAppBar>
      </div>
    )
  }
}

// const AppBar = ({ openLoginModal, onMenuClick, loggedInUser }) => (
// )

export default AppBar
