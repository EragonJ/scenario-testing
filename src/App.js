import React from 'react'
import Header from './components/header'
import Body from './components/body'
import EmptyDesign from './components/empty-design'
import Users from './components/users'
import Teams from './components/teams'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Norman M. New',
          avatar: 'https://i.pravatar.cc/80?img=52'
        },
        {
          name: 'Sharon L. Allred',
          avatar: 'https://i.pravatar.cc/80?img=24'
        },
        {
          name: 'Ruth C. Baker',
          avatar: 'https://i.pravatar.cc/80?img=25'
        },
        {
          name: 'Betty J. Spencer',
          avatar: 'https://i.pravatar.cc/80?img=26'
        },
        {
          name: 'Amanda J. Dowell',
          avatar: 'https://i.pravatar.cc/80?img=27'
        },
        {
          name: 'Regina L. Hendry',
          avatar: 'https://i.pravatar.cc/80?img=28'
        },
        {
          name: 'Lisa A. Montana',
          avatar: 'https://i.pravatar.cc/80?img=29'
        }
      ],
      teams: [
        {
          name: 'Devs',
          avatar: 'https://placedog.net/90/90'
        },
        {
          name: 'Designers',
          avatar: 'https://placedog.net/100/100'
        },
        {
          name: 'Operations',
          avatar: 'https://placedog.net/80/80'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Body>
          <Users info={this.state.users}></Users>
          <Teams info={this.state.teams}></Teams>
          {this.state.users.length === 0 &&
            <EmptyDesign />
          }
        </Body>
      </div>
    );
  }
}

export default App;
