import React from 'react';
import {presidents} from '../data/dataPresidents';
import PropTypes from 'prop-types';

const Result = (props) => {
    const {result} = props
    return (
      (result === presidents.length)
      ? <h2 className="score"><span className="gameWin">Brawo! Znasz wszystkich polskich prezydentów!</span></h2>
      : <h2 className="score">Wynik: {result}/{presidents.length} </h2>
      
    )
}

Result.propTypes = {
  result: PropTypes.number
}


export default Result;