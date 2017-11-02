import React from 'react';

const NewCardItem = () => {

  return(
    <div className="NewCardItem">
      <div>
        <div>Title: {title}</div>
        <div>Priority: {priority}</div>
        <div>Created By: {} </div>
        <div>Assigned To: {} </div>
      </div>
    </div>
    )

}

export default NewCardItem;