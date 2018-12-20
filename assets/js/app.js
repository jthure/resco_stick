// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import 'phoenix_html'

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
// import Snackbar from '@material-ui/core/Snackbar'
// import CircularProgress from '@material-ui/core/CircularProgress'
// import Fade from '@material-ui/core/Fade'


import '../css/app.css'
import LoginModal from './modals/LoginModal'
import ProjectTable from './ProjectTable'
import AppBar from './AppBar'
import Drawer from './Drawer'

import { get, put } from './api'


const KEY_STORED_USER = 'key_stored_user'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      users: [],
      loading: false,
      loggedInUser: null,
      loginModalOpen: true,
      drawerOpen: false,
    }
  }

  async componentWillMount() {
    this.setState({ loading: true })
    Promise.all([
      get('projects')
        .then(data => this.setState({ projects: data }))
        .catch(error => console.log(error)),

      get('users')
        .then(data => this.setState({ users: data }))
        .catch(error => console.log(error)),

    ])
      .then(() => {
        this.setState({ loading: false })
        this.setUser(localStorage[KEY_STORED_USER])
        this.pollProjects()
      })
      .catch(error => console.log(error))
  }

    setUser = (email) => {
      const { users } = this.state
      const user = users.find(u => u.email === email)
      if (user) {
        localStorage.setItem(KEY_STORED_USER, user.email)
        this.setState({ loggedInUser: user, loginModalOpen: false })
      }
    }

    lockProject = (project) => {
      this.setState({ loading: true })
      const { loggedInUser } = this.state
      put(`projects/${project.id}`, { project: { locked_by_id: loggedInUser.id } })
        .then(projects => this.setState({ projects, loading: false }))
    }

    releaseProject = (project) => {
      this.setState({ loading: true })
      put(`projects/${project.id}`, { project: { locked_by_id: null } })
        .then(projects => this.setState({ projects, loading: false }))
    }

    pollProjects = () => setTimeout(
      () => get('projects')
        .then(data => this.setState({ projects: data }))
        .catch(error => console.log(error))
        .finally(() => this.pollProjects()),
      10000,
    )

    toggleDrawer = (open) => {
      const { drawerOpen } = this.state
      this.setState({ drawerOpen: open === false || open === true ? open : !drawerOpen })
    }

    toggleLoginModal = (open) => {
      const { loginModalOpen } = this.state
      this.setState({ loginModalOpen: open === false || open === true ? open : !loginModalOpen })
    }

    render() {
      const {
        projects, users, loginModalOpen, loggedInUser, drawerOpen, loading,
      } = this.state
      return (
        <div>
          <AppBar
            openLoginModal={() => this.setState({ loginModalOpen: true })}
            onMenuClick={this.toggleDrawer}
            loggedInUser={loggedInUser}
          />
          <ProjectTable
            projects={projects}
            lockProject={this.lockProject}
            releaseProject={this.releaseProject}
            loggedInUser={loggedInUser}
          />
          <Drawer open={drawerOpen} close={this.toggleDrawer} />
          <LoginModal
            open={loginModalOpen}
            close={() => this.toggleLoginModal(false)}
            users={users}
            loggedInUser={loggedInUser}
            setUser={this.setUser}
          />
          {/* <Snackbar open={loading} message={<div style={{ textAlign: 'center', width: '100%' }}><CircularProgress /></div>} /> */}
        </div>
      )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-root'),
)
