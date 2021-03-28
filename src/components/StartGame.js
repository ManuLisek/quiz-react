import React from 'react';
import PropTypes from 'prop-types';

const StartGame = (props) => {

    const {clickStart} = props
    
    return (
      <div className="start">
        <h2>Kliknik guzik aby rozpocząć quiz!</h2>
        <button className="btn-start" onClick={clickStart}>Start</button>
      </div>
    );
  
}

StartGame.propTypes = {
    clickStart: PropTypes.func,
  }

export default StartGame;