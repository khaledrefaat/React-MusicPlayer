import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/shared/Container';
import SongItem from '../components/songs/SongItem';

import GridContainer from '../components/shared/GridContainer';

import Modal from '../components/shared/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../store/data-slice';

const Library = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.auth.userId);
  const { userPlaylists, isLoading, error } = useSelector(state => state.data);

  const paramsUserId = useParams();

  useEffect(() => {
    dispatch(
      fetch(
        `http://localhost:9000/api/playlists/user/${
          paramsUserId.userId || userId
        }`,
        'userPlaylists'
      )
    );
  }, [dispatch, userId, paramsUserId]);

  console.log(userPlaylists);

  if (isLoading) return <Modal spinner />;

  return (
    <Container direction="row">
      <GridContainer fullwidth>
        {error && <h1>{error}</h1>}
        {userPlaylists &&
          userPlaylists.map(({ playlistName, playlistCover, _id }) => {
            return (
              <SongItem
                link={`/playlist/${_id}`}
                name={playlistName}
                cover={`http://localhost:9000/${playlistCover}`}
                key={_id}
              />
            );
          })}
      </GridContainer>
    </Container>
  );
};

export default Library;
