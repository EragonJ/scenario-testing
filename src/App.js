import React from 'react'
import Header from './components/header'
import Body from './components/body'
import EmptyDesign from './components/empty-design'
import Users from './components/users'
import Teams from './components/teams'
import Service from './service'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      teams: []
    }
  }

  componentDidMount() {
    Service.getUsers().then((users) => {
      this.setState({
        users
      })
    })

    Service.getTeams().then((teams) => {
      this.setState({
        teams
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Body>
          {this.state.users.length !== 0 && 
            <Users info={this.state.users}></Users>
          }
          {this.state.teams.length !== 0 &&
            <Teams info={this.state.teams}></Teams>
          }
          {this.state.users.length === 0 && this.state.teams.length === 0 &&
            <EmptyDesign />
          }
        </Body>
      </div>
    );
  }
}

export default App;
