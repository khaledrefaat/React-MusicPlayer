import React from 'react';

import Container from '../shared/components/Container';
import SongList from '../songs/components/SongList';
import UserList from '../user/components/UserList';

const Home = () => {
  return (
    <Container direction="row">
      <SongList title="Songs You Might Like" />
      <UserList />
    </Container>
  );
};

export default Home;
