import React, {Component} from 'react';
import PresidentsList from './PresidentsList';
import AddPresident from './AddPresident';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPresidentVisible: false,
        }
    }
    
  render(){
    const {isPresidentVisible} = this.state
    return (
      <div className="App">
        <AddPresident />
        <PresidentsList isPresidentVisible={isPresidentVisible} />
      </div>
    );
  }
}

export default App;
