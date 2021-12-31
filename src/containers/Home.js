import React from 'react';

import Container from '../components/shared/Container';
import SongList from '../components/songs/SongList';
import UserList from '../components/user/UserList';

const Home = () => {
  return (
    <Container direction="row">
      <SongList title="songs you might like" />
      <UserList />
    </Container>
  );
};

export default Home;
