import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/shared/Container';
import SongItem from '../components/songs/SongItem';

import GridContainer from '../components/shared/GridContainer';

import useHttpClient from '../components/hooks/http-hook';
import Modal from '../components/shared/Modal';

const Library = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [playLists, setPlaylists] = useState();

  const { userId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await sendRequest(
          'http://localhost:9000/api/playlists/user/' + userId
        );
        setPlaylists(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [sendRequest, userId, setPlaylists]);

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
