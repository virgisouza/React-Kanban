import React from 'react';

const UsersItem = ({id, username}) => {
  //console.log(id, 'users id')
  //console.log(username, 'users username');
  return(
    <option value={id}>{username}</option>
  );
}

// UsersItem.defaultProps ={
//   username: []
// }
export default UsersItem;