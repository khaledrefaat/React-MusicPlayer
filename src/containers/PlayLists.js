import React, { useState, useEffect } from 'react';

import Container from '../components/shared/Container';
import SongItem from '../components/songs/SongItem';

import UserList from '../components/user/UserList';
import PagesTitle from '../components/shared/PagesTitle';
import GridContainer from '../components/shared/GridContainer';
import useHttpClient from '../components/hooks/http-hook';
import Modal from '../components/shared/Modal';

const PlayLists = () => {
  const [playlists, setPlaylsits] = useState();
  const { sendRequest, isLoading } = useHttpClient();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlistsData = await sendRequest(
          'http://localhost:9000/api/playlists'
        );

        setPlaylsits(playlistsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaylists();
  }, [sendRequest]);

  if (isLoading) return <Modal spinner={true} />;

  return (
    <Container direction="row">
      {playlists && (
        <GridContainer>
          <PagesTitle title="some playlists you might like" />
          {playlists.map(({ playlistName, _id, playlistCover }) => {
            return (
              <SongItem
                name={playlistName}
                cover={playlistCover}
                link={`/playlist/${_id}`}
                key={_id}
              />
            );
          })}
        </GridContainer>
      )}
      <UserList />
    </Container>
  );
};

export default PlayLists;
