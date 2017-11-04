import React from 'react';
import UsersItem from '../../components/UsersItem';


const UsersList = ({users, onUserChange}) => {

  return (
    <div className='UsersList'>
    <select onChange={onUserChange}>
      {
        users.map((props, idx) => {
          //console.log(props.id, 'users props id container');
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

export default UsersList;