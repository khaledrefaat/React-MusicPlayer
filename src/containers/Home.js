import React, { useEffect, useState } from 'react';

import Container from '../components/shared/Container';
import UserList from '../components/user/UserList';
import GridContainer from '../components/shared/GridContainer';
import SongItem from '../components/songs/SongItem';
import PagesTitle from '../components/shared/PagesTitle';
import useHttpClient from '../components/hooks/http-hook';

const Home = () => {
  const [songsData, setSongsData] = useState();
  const [users, setUsers] = useState();
  const { sendRequest, isLoading } = useHttpClient();

  useEffect(() => {
    const fetch = async () => {
      try {
        const songsData = await sendRequest('http://localhost:9000/songs');
        const usersData = await sendRequest('http://localhost:9000/users');
        setSongsData(songsData);
        setUsers(usersData);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [sendRequest]);

  if (isLoading) return <div>Loading...</div>;

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
      {users && <UserList users={users} />}
    </Container>
  );
};

export default Home;
