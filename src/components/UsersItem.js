import React from 'react';

const UsersItem = ({id, username}) => {
  return(
    <option value={id}>{username}</option>
  );
}

// UsersItem.defaultProps ={
//   username: []
// }
export default UsersItem;