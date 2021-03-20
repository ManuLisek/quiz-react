import React from 'react';
import PropTypes from 'prop-types';

const President = (props) => {

  const {name, lastName, termOfOffice, isPresidentVisible} = props.president
  //console.log(props.president)
  return (
    
    <tr>
      <td className={`${isPresidentVisible ? "" : " hiddenPresident"}`}>{name} {lastName}</td>
      <td>{termOfOffice}</td>
    </tr>
)
}

President.propTypes = {
    isPresidentVisible: PropTypes.bool,
  }

export default President;