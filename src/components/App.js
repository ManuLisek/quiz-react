import React, {Component} from 'react';
import PresidentsList from './PresidentsList';
import AddPresident from './AddPresident';
import {presidents} from '../data/dataPresidents';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPresidentVisible: false,
        }
    }

    handleChangeInput = (e) => {
        const index = presidents.findIndex(president => (
          president.lastName.toLowerCase() === e.target.value.toLowerCase() || `${president.name.toLowerCase()} ${president.lastName.toLowerCase()}` === e.target.value.toLowerCase()));
        if(index !== -1){
          presidents[index].isPresidentVisible = true;
          const isPresidentVisible = presidents[index].isPresidentVisible;
          this.setState(({result}) => ({
            isPresidentVisible,
            
          }))
          e.target.value = '';
        }
      }
    
  render(){
    const {isPresidentVisible} = this.state;
    return (
      <div className="App">
        <AddPresident change={this.handleChangeInput} />
        <PresidentsList isPresidentVisible={isPresidentVisible} />
      </div>
    );
  }
}

export default App;
