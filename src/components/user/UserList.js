import React, { useEffect, useState, useContext } from 'react';
import UserItem from './UserItem';

import useHttpClient from '../hooks/http-hook';

import { AuthContext } from '../context/auth-context';

const UserList = () => {
  const [users, setUsers] = useState();
  const { sendRequest } = useHttpClient();
  const authenticate = useContext(AuthContext);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const usersData = await sendRequest('http://localhost:9000/api/users');
        const removeCurrentUser = usersData.filter(
          ({ _id }) => _id !== authenticate.userId
        );
        setUsers(removeCurrentUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaylists();
  }, [sendRequest, authenticate]);

  // console.log(isMounted);

  return (
    <div className="user-list">
      <h3>Users You May Like</h3>
      {users && users.map(user => <UserItem user={user} key={user._id} />)}
    </div>
  );
};

export default UserList;
