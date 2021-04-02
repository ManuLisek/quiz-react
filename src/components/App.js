import React, {Component} from 'react';
import PresidentsList from './PresidentsList';
import AddPresident from './AddPresident';
import StartGame from './StartGame';
import Clock from './Clock';
import Result from './Result';
import {presidents} from '../data/dataPresidents';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPresidentVisible: false,
            minutes: 2,
            seconds: 0,
            result: 0,
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
            result: result + 1
          }))
          e.target.value = '';
        }
      }
    
    handleClick = () => {
        this.interval = setInterval(() => {
          const {seconds, minutes} = this.state
          if(seconds > 0){
          this.setState(({seconds}) => ({
            seconds: seconds - 1
          }))
          }
          if(seconds === 0){
            if(minutes === 0){
                clearInterval(this.interval)
            } else{
              this.setState(({minutes}) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        },1000)
      }
    
  render(){
    const {isPresidentVisible, minutes, seconds, result} = this.state;
    return (
      <div className="App">
        <AddPresident change={this.handleChangeInput} />
        <StartGame clickStart={this.handleClick}/>
        <PresidentsList isPresidentVisible={isPresidentVisible} />
        <Clock minutes={minutes} seconds={seconds}/>
        <Result result={result}/>
      </div>
    );
  }
}

export default App;
