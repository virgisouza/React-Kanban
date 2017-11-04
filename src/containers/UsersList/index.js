import React from 'react';
import UsersItem from '../../components/UsersItem';


const UsersList = ({users}) => {

  return (
    <div className='UsersList'>
    <select>
      {
        users.map((props, idx) => {

          return (

            <UsersItem username={props.username} key={idx}/>
            )
        })
      }
      </select>
    </div>
  );
}

export default UsersList;