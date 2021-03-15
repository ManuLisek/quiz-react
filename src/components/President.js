import React from 'react';

const President = (props) => {

  const {name, lastName, termOfOffice} = props.president
  console.log(props.president)
  return (
    
    <tr>
      <td>{name} {lastName}</td>
      <td>{termOfOffice}</td>
    </tr>
)
}


export default President;