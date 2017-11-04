import React from 'react';

const PrioritiesItem = ({id, type}) => {
  //console.log('priority component',id)
  return(
    <option value={id}>{type}</option>
  );
}

export default PrioritiesItem;

