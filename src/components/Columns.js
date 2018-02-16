import React from 'react';

const Columns = ({type}) => {

  return(
      <h3>{type}</h3>
  );
}


//render card item into column by type [queue, progress, done]
export default Columns;