import React from 'react';

const PrioritiesItem = ({type}) => {

  return(
    <div className="PrioritiesItem">
      <select>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
        <option value="4">Blocker</option>
      </select>
    </div>
  );
}

export default PrioritiesItem;