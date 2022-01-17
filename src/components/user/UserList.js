import React, { useEffect, useState, useRef } from 'react';
import UserItem from './UserItem';

import useHttpClient from '../hooks/http-hook';

const UserList = () => {
  const [users, setUsers] = useState();
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    let isMounted = true;

    const fetchPlaylists = async () => {
      try {
        if (isMounted) {
          const usersData = await sendRequest(
            'http://localhost:9000/api/users'
          );
          setUsers(usersData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaylists();

    return () => (isMounted = false);
  }, [sendRequest]);

  // console.log(isMounted);

  return (
    <div className="user-list">
      <h3>Users You May Like</h3>
      {users && users.map(user => <UserItem user={user} key={user._id} />)}
    </div>
  );
};

export default UserList;
