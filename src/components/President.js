import React from 'react';

const President = (props) => {

  const {name, lastName, termOfOffice, isPresidentVisible} = props.president
  console.log(props.president)
  return (
    
    <tr>
      <td className={`${isPresidentVisible ? "" : " hiddenPresident"}`}>{name} {lastName}</td>
      <td>{termOfOffice}</td>
    </tr>
)
}


export default President;