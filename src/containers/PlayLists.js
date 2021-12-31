import React from 'react';

import Container from '../components/shared/Container';
import DUMMY_PLAYLISTS from '../DUMMY_PLAYLISTS';
import SongItem from '../components/songs/SongItem';

import UserList from '../components/user/UserList';
import PagesTitle from '../components/shared/PagesTitle';
import GridContainer from '../components/shared/GridContainer';

const PlayLists = () => {
  return (
    <Container direction="row">
      <GridContainer>
        <PagesTitle title="some playlists you might like" />
        {DUMMY_PLAYLISTS.map(playlist => {
          return (
            <SongItem
              item={playlist}
              link={`/playlist/${playlist.id}`}
              key={playlist.id}
            />
          );
        })}
      </GridContainer>
      <UserList />
    </Container>
  );
};

export default PlayLists;
