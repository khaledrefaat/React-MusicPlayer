import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h3>Users You May Like</h3>
      {users.map(user => (
        <UserItem user={user} key={user._id} />
      ))}
    </div>
  );
};

export default UserList;
