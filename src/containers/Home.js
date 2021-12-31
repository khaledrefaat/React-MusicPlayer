import React from 'react';

import Container from '../components/shared/Container';
import UserList from '../components/user/UserList';
import GridContainer from '../components/shared/GridContainer';
import SongItem from '../components/songs/SongItem';
import PagesTitle from '../components/shared/PagesTitle';
import data from '../data';

const songs = data();

const Home = () => {
  return (
    <Container direction="row">
      <GridContainer>
        <PagesTitle title="songs you might like" />
        {songs.map(song => (
          <SongItem key={song.id} link={`/song/${song.id}`} item={song} />
        ))}
      </GridContainer>
      <UserList />
    </Container>
  );
};

export default Home;
