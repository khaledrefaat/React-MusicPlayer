import React from 'react';

import Container from '../components/shared/Container';
import DUMMY_PLAYLISTS from '../DUMMY_PLAYLISTS';
import PlayListItem from '../components/songs/PlayListItem';

import UserList from '../components/user/UserList';

const PlayLists = () => {
  return (
    <Container direction="row">
      <div className="playlists-container">
        <h2>some play lists you might like</h2>
        {DUMMY_PLAYLISTS.map(playlist => {
          return <PlayListItem playlist={playlist} key={Math.random()} />;
        })}
      </div>
      <UserList />
    </Container>
  );
};

export default PlayLists;
