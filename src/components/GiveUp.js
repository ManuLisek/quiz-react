import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

const GiveUp = (props) => {
    const {isGiveUpVisible, clickEnd, minutes, seconds} = props
    return (
      <div className="end">
        <Clock minutes={minutes} seconds={seconds}/>
        <button className={`btn btn-end ${isGiveUpVisible ? "" : "hiddenGiveUp"}`} onClick={clickEnd}>Poddaję się</button>
      </div>
    );
  
}

GiveUp.propTypes = {
  clickEnd: PropTypes.func,
  isGiveUpVisible: PropTypes.bool,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
}

export default GiveUp;