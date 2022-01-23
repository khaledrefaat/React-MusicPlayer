import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';

const UserList = () => {
  const userId = useSelector(state => state.auth.userId);
  const users = useSelector(state => state.data.users);

  const filterUsersList = userId
    ? users.filter(user => user._id !== userId)
    : users;

  return (
    <div className="user-list">
      <h3>Users You May Like</h3>
      {filterUsersList.map(user => (
        <UserItem user={user} key={user._id} />
      ))}
    </div>
  );
};

export default UserList;
