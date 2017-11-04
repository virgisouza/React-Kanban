import React from 'react';

const PrioritiesItem = ({id, type}) => {

  return(
    <option value={id}>{type}</option>
  );
}

export default PrioritiesItem;

