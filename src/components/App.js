import React, {Component} from 'react';
import PresidentsList from './PresidentsList';
import AddPresident from './AddPresident';
import StartGame from './StartGame';
import Result from './Result';
import GiveUp from './GiveUp';
import {presidents} from '../data/dataPresidents';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPresidentVisible: false,
            minutes: 0,
            seconds: 20,
            result: 0,
            isInputDisabled: true,
            isQuizRunning: false,
            isGiveUpVisible: false,
            isPresidentGuessed: false,
            lastSeconds: false,
        }
    }

    handleChangeInput = (e) => {
        const index = presidents.findIndex(president => (
          president.lastName.toLowerCase() === e.target.value.toLowerCase() || `${president.name.toLowerCase()} ${president.lastName.toLowerCase()}` === e.target.value.toLowerCase()));
        if(index !== -1){
          presidents[index].isPresidentVisible = true;
          const isPresidentVisible = presidents[index].isPresidentVisible;
          presidents[index].isPresidentGuessed = true;
          const isPresidentGuessed = presidents[index].isPresidentGuessed;
          this.setState(({result}) => ({
            isPresidentVisible,
            isPresidentGuessed,
            result: result + 1
          }))
          e.target.value = '';
        }
      }
    
    handleClick = () => {
        this.setState({
            isInputDisabled: false,
            isQuizRunning: true,
            isGiveUpVisible: true,
          })
        this.interval = setInterval(() => {
          const {seconds, minutes} = this.state
          if(seconds > 0){
          this.setState(({seconds}) => ({
            seconds: seconds - 1
          }))
          }
          if(seconds === 0){
            if(minutes === 0){
                this.handleEndGame();
            } else{
              this.setState(({minutes}) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        },1000)
      }

      handleEndGame = () => {
        clearInterval(this.interval)
        this.setState({
            isInputDisabled: true,
            isGiveUpVisible: false,
        })
        presidents.forEach((president) => {
            president.isPresidentVisible = true;
            const isPresidentVisible = president.isPresidentVisible;
            this.setState({
                isPresidentVisible,
            })
        }
        ) 
      }

      componentDidUpdate(prevProps, prevState){
        const {result, seconds, minutes} = this.state
        if(prevState.result !== result){
          if(result === presidents.length){
            this.handleEndGame();
          }
        }
        if(prevState.seconds !== seconds){
          if(minutes === 0){
            if(seconds <= 10){
              this.setState({
                lastSeconds: true,
              })
            }
          }
        }
      }

      componentWillUnmount(){
        clearInterval(this.interval)
      }


    
  render(){
    const {isPresidentVisible, minutes, seconds, result, isInputDisabled, isQuizRunning, isGiveUpVisible, isPresidentGuessed, lastSeconds} = this.state;
    return (
      <div className="App">
        <AddPresident change={this.handleChangeInput} isInputDisabled={isInputDisabled}/>
        {isQuizRunning
        ? <GiveUp 
            clickEnd={this.handleEndGame} 
            isGiveUpVisible={isGiveUpVisible} 
            minutes={minutes} 
            seconds={seconds} 
            lastSeconds={lastSeconds}
          />
        : <StartGame 
            clickStart={this.handleClick}
          />}
        <PresidentsList isPresidentVisible={isPresidentVisible} isPresidentGuessed={isPresidentGuessed}/>
        <Result result={result}/>
      </div>
    );
  }
}

export default App;
