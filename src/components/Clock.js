import React from 'react';
import PropTypes from 'prop-types';

const Clock = (props) => {

    const {minutes, seconds} = props;

    return(
      <div className="clock">
        <h2>Pozostało czasu: <span>{minutes}:{seconds > 9 ? seconds : `0${seconds}`}</span></h2>
      </div>
    )
}

Clock.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }

export default Clock;