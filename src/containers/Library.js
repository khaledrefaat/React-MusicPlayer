import React from 'react';

import Container from '../components/shared/Container';
import DUMMY_PLAYLISTS from '../DUMMY_PLAYLISTS';
import SongItem from '../components/songs/SongItem';

import GridContainer from '../components/shared/GridContainer';

const Library = () => {
  return (
    <Container direction="row">
      <GridContainer fullwidth>
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
    </Container>
  );
};

export default Library;
