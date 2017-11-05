import React from 'react';

const NewCardItem = ({title, assigned_to, priorities_id, status_id, created_by}) => {

  return(
      <ul className="new-card">
        <div>Title: {title}</div>
        <div>Assigned To: {assigned_to} </div>
        <div>Priority: {priorities_id}</div>
        <div>Status : {status_id}</div>
        <div>Created By: {created_by} </div>
        <button>Change Status</button>
      </ul>
  );
}

//rendering filtered card
export default NewCardItem;



