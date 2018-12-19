import React from 'react'
import MUIDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from '@material-ui/core/Icon'
const Drawer = ({ open, close }) => (
  <MUIDrawer
    open={open}
    onClose={close}
  >
    <div
      tabIndex={0}
      role="button"
    />
    <List>
      <ListItem button key="edit_projects">
        <ListItemIcon><Icon>edit</Icon></ListItemIcon>
        <ListItemText primary="Edit projects" />
      </ListItem>
    </List>
  </MUIDrawer>
)

export default Drawer
