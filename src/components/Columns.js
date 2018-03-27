import React from 'react';

const Columns = ({type}) => {

  return(
      <div className='columns-name'>{type}</div>
  );
}


//render card item into column by type [queue, progress, done]
export default Columns;