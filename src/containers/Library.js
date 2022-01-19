import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/shared/Container';
import SongItem from '../components/songs/SongItem';

import GridContainer from '../components/shared/GridContainer';

import useHttpClient from '../components/hooks/http-hook';
import Modal from '../components/shared/Modal';

import { AuthContext } from '../components/context/auth-context';

const Library = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [playLists, setPlaylists] = useState();
  const { userId } = useContext(AuthContext);

  const paramsUserId = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (paramsUserId.userId || userId) {
          const res = await sendRequest(
            `http://localhost:9000/api/playlists/user/${
              paramsUserId.userId || userId
            }`
          );
          setPlaylists(res);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [sendRequest, userId, setPlaylists, paramsUserId]);

  if (isLoading) return <Modal spinner />;

  return (
    <Container direction="row">
      <GridContainer fullwidth>
        {error && <h1>{error}</h1>}
        {playLists &&
          playLists.map(({ playlistName, playlistCover, _id }) => {
            return (
              <SongItem
                link={`/playlist/${_id}`}
                name={playlistName}
                cover={playlistCover}
                key={_id}
              />
            );
          })}
      </GridContainer>
    </Container>
  );
};

export default Library;
