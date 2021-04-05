import React from 'react';
import PropTypes from 'prop-types';

const AddPresident = (props) => {
    const {isInputDisabled} = props;
  return (
    <div className="addPresident">
      <h1>Odgadnij wszystkich polskich prezydentów: </h1>
      <input type="text" placeholder="Dodaj prezydenta..." disabled={isInputDisabled} onChange={(e) => props.change(e)} />
    </div>
  );
}

AddPresident.propTypes = {
    change: PropTypes.func,
    isInputDisabled: PropTypes.bool,
  };

export default AddPresident;