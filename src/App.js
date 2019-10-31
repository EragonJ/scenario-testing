import React from 'react';
import Header from './components/header';
import EmptyDesign from './components/empty-design';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.isEmpty &&
          <EmptyDesign />
        }
      </div>
    );
  }
}

export default App;
