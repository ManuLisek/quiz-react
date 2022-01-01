import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

const Clock = (props) => {

    const {minutes, seconds, lastSeconds} = props;

    return(
        <div className="clock">
          <h2>Pozostało czasu: <span className={lastSeconds ? "lastSeconds" : ""}>{minutes}:{seconds > 9 ? seconds : `0${seconds}`}</span></h2>
        </div>
      )
}

Clock.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    lastSeconds: PropTypes.bool,
  }

export default Clock;