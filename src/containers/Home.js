import React, { useEffect, useState } from 'react';

import Container from '../components/shared/Container';
import UserList from '../components/user/UserList';
import GridContainer from '../components/shared/GridContainer';
import SongItem from '../components/songs/SongItem';
import PagesTitle from '../components/shared/PagesTitle';
import useHttpClient from '../components/hooks/http-hook';
import Modal from '../components/shared/Modal';

const Home = () => {
  const [songsData, setSongsData] = useState();
  const { sendRequest, isLoading } = useHttpClient();

  useEffect(() => {
    const fetch = async () => {
      try {
        const songsData = await sendRequest('http://localhost:9000/api/songs');
        setSongsData(songsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [sendRequest]);

  if (isLoading) return <Modal spinner={true} />;

  return (
    <Container direction="row">
      {songsData && (
        <GridContainer>
          <PagesTitle title="songs you might like" />
          {songsData.map(({ _id, songName, songCover, songArtist }) => (
            <SongItem
              key={_id}
              name={songName}
              cover={songCover}
              artist={songArtist || 'Unknown'}
              link={`/song/${_id}`}
            />
          ))}
        </GridContainer>
      )}
      <UserList />
    </Container>
  );
};

export default Home;
