import React from 'react';
import UsersItem from '../../components/UsersItem';


const AssignedToList = ({users, onAssignedToChange}) => {

  return (
    <div className='AssignedToList'>
    <select onChange={onAssignedToChange}>
      {
        users.map((props, idx) => {
          return (

            <UsersItem
              username={props.username}
              id={props.id}
              key={idx}
            />
          )
        })
      }
      </select>
    </div>
  );
}

export default AssignedToList;