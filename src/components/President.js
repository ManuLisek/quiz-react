import React from 'react';
import PropTypes from 'prop-types';

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
    isPresidentVisible: PropTypes.any,
    isPresidentGuessed: PropTypes.bool,
  }

export default President;