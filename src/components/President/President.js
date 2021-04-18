import React from 'react';
import PropTypes from 'prop-types';
import './President.scss';


const President = (props) => {

  const {name, lastName, termOfOffice, isPresidentVisible, isPresidentGuessed} = props.president

  return (
    
    <tr>
      <td className={`${isPresidentGuessed ? " guessedPresident" : ""} ${isPresidentVisible ? "" : " hiddenPresident"}`}>{name} {lastName}</td>
      <td>{termOfOffice}</td>
    </tr>
)
}

President.propTypes = {
    isPresidentVisible: PropTypes.bool,
    isPresidentGuessed: PropTypes.bool,
  }

export default President;