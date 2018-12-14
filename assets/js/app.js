// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import 'phoenix_html';

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import '../css/app.css';
import LoginModal from './modals/LoginModal';
import ProjectTable from './ProjectTable';
import { get, post, put } from './api';


const KEY_STORED_USER = 'key_stored_user';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      users: [],
      loading: false,
      loggedInUser: localStorage ? localStorage[KEY_STORED_USER] : null,
      loginModalOpen: true,
    };
  }

  async componentWillMount() {
    this.setState({ loading: true });
    Promise.all([
      get('projects')
        .then(data => this.setState({ projects: data }))
        .catch(error => console.log(error)),

      get('users')
        .then(data => this.setState({ users: data }))
        .catch(error => console.log(error)),

    ])
      .then(() => this.setState({ loading: false }))
      .catch(error => console.log(error));
  }

    setUser = (email) => {
      const { users } = this.state;
      const user = users.find(u => u.email === email);
      if (user) {
        localStorage.setItem(KEY_STORED_USER, user.email);
        this.setState({ loggedInUser: user, loginModalOpen: false });
      }
    }

    lockProject = (project) => {
      const { loggedInUser } = this.state;
      console.log({ locked_by_id: loggedInUser.id });
      put(`projects/${project.id}`, { project: { locked_by_id: loggedInUser.id } })
        .then(projects => this.setState({ projects }));
    }


    render() {
      const {
        projects, users, loginModalOpen, loggedInUser,
      } = this.state;
      return (
        <div>
          <ProjectTable projects={projects} lockProject={this.lockProject} />

          <LoginModal
            open={loginModalOpen}
            users={users}
            loggedInUser={loggedInUser}
            setUser={this.setUser}
          />
        </div>
      );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-root'),
);
