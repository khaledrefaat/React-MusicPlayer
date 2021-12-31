import React from 'react';

import Container from '../components/shared/Container';
import DUMMY_PLAYLISTS from '../DUMMY_PLAYLISTS';
import LibraryList from '../components/songs/LibraryList';

const PlayLists = () => {
  return (
    <Container>
      <div className="lists-container">
        {DUMMY_PLAYLISTS.map(playlist => {
          return (
            <LibraryList
              img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              title="english"
              list={playlist}
              key={Math.random()}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default PlayLists;
