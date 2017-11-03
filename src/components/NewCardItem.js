import React from 'react';

const NewCardItem = ({title, assigned_to, priorities_id, status_id, created_by}) => {

  return(
    <div className="NewCardItem">
      <br/>
      <ul>
        <div>Title: {title}</div>
        <div>Assigned To: {assigned_to} </div>
        <div>Priority: {priorities_id}</div>
        <div>Status : {status_id}</div>
        <div>Created By: {created_by} </div>
      </ul>
    </div>
  );
}

export default NewCardItem;



