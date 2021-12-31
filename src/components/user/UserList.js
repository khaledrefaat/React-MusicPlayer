import React from 'react';
import UserItem from './UserItem';
import { v4 as uuidv4 } from 'uuid';
const DUMMY_USERS = [
  {
    name: 'Erzsi Monifa',
    description: '5 PlayLists',
    img: 'https://images.unsplash.com/photo-1525181737312-adca155347de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    id: uuidv4(),
  },
  {
    name: 'Rosaline Effie',
    description: '3 PlayLists',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    id: uuidv4(),
  },
  {
    name: 'Eiran Jurgis',
    description: '7 PlayLists',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    id: uuidv4(),
  },
  {
    name: 'Bethany Puk',
    description: '1 PlayLists',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    id: uuidv4(),
  },
  {
    name: 'Abhinav Jeffery',
    description: '2 PlayLists',
    img: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    id: uuidv4(),
  },
  {
    name: 'Wendi Tatiana',
    description: '2 PlayLists',
    img: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    id: uuidv4(),
  },
];

const UserList = () => {
  return (
    <div className="user-list">
      <h3>Users You May Like</h3>
      {DUMMY_USERS.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
      {/* <UserItem user={DUMMY_USERS[0]} /> */}
    </div>
  );
};

export default UserList;
