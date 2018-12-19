import React from 'react'
import MUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const AppBar = ({ openLoginModal, onMenuClick }) => (
  <div style={{ flexGrow: 1, marginBottom: '20px' }}>
    <MUIAppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Resco Stick
        </Typography>
        <Button color="inherit" onClick={openLoginModal}>Change user</Button>
      </Toolbar>
    </MUIAppBar>
  </div>
)

export default AppBar
