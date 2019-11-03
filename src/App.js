import React from 'react'
import Header from './components/header'
import Body from './components/body'
import EmptyDesign from './components/empty-design'
import Users from './components/users'
import Teams from './components/teams'
import Service from './service'
import {
  Spinner
} from '@blueprintjs/core'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      teams: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      Service.getUsers().then((users) => {
        this.setState({
          users
        })
      }).finally(() => {
        this.setState({
          isLoading: false
        })
      })

      Service.getTeams().then((teams) => {
        this.setState({
          teams
        })
      }).finally(() => {
        this.setState({
          isLoading: false
        })
      })
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Body>
          {this.state.isLoading &&
            <div className="hv-center">
              <Spinner />
            </div>
          }
          {this.state.users.length !== 0 && !this.state.isLoading &&
            <Users info={this.state.users}></Users>
          }
          {this.state.teams.length !== 0 && !this.state.isLoading &&
            <Teams info={this.state.teams}></Teams>
          }
          {this.state.users.length === 0 && this.state.teams.length === 0 && !this.state.isLoading &&
            <div className="hv-center">
              <EmptyDesign />
            </div>
          }
        </Body>
      </div>
    );
  }
}

export default App;
