import React from 'react';
import PropTypes from 'prop-types';
import './AddPresident.scss';

const AddPresident = (props) => {
    const {isInputDisabled} = props;
  return (
    <div className="addPresident">
      <h1 className="addPresident__header">Odgadnij wszystkich polskich prezydentów: </h1>
      <input className="addPresident__input input" type="text" placeholder="Dodaj prezydenta..." disabled={isInputDisabled} onChange={(e) => props.change(e)} />
    </div>
  );
}

AddPresident.propTypes = {
    change: PropTypes.func,
    isInputDisabled: PropTypes.bool,
  };

export default AddPresident;