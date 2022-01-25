import React, { useEffect } from 'react';

import Container from '../components/shared/Container';
import SongItem from '../components/songs/SongItem';

import UserList from '../components/user/UserList';
import PagesTitle from '../components/shared/PagesTitle';
import GridContainer from '../components/shared/GridContainer';
import Modal from '../components/shared/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../store/data-slice';

const PlayLists = () => {
  const dispatch = useDispatch();
  const { playlists, isLoading } = useSelector(state => state.data);
  const { userId } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetch('http://localhost:9000/api/playlists', 'playlists'));
    // so it will fetch new users each time we render playlists
    dispatch(fetch('http://localhost:9000/api/users', 'users'));
  }, [dispatch]);

  if (isLoading) return <Modal spinner={true} />;

  return (
    <Container direction="row">
      {playlists && (
        <GridContainer>
          <PagesTitle title="some playlists you might like" />
          {playlists
            .filter(playlist => playlist.creator.id !== userId)
            .map(({ playlistName, _id, playlistCover, creator }) => (
              <SongItem
                name={playlistName}
                cover={`http://localhost:9000/${playlistCover}`}
                link={`/playlist/${_id}`}
                artist={creator.creator}
                key={_id}
              />
            ))}
        </GridContainer>
      )}
      <UserList />
    </Container>
  );
};

export default PlayLists;
