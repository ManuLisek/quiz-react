import React, {Component} from 'react';
import PresidentsList from './PresidentsList';
import AddPresident from './AddPresident';
import './App.scss';

class App extends Component {
    
  render(){

    return (
      <div className="App">
        <AddPresident />
        <PresidentsList />
      </div>
    );
  }
}

export default App;
