import React, { useEffect } from 'react';

import Container from '../components/shared/Container';
import UserList from '../components/user/UserList';
import GridContainer from '../components/shared/GridContainer';
import SongItem from '../components/songs/SongItem';
import PagesTitle from '../components/shared/PagesTitle';
import Modal from '../components/shared/Modal';
import { useDispatch } from 'react-redux';
import { fetch } from '../store/data-slice';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const { songs, error, isLoading } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetch('http://localhost:9000/api/songs'));
    // so it will fetch new users each time we render homepage
    dispatch(fetch('http://localhost:9000/api/users', 'users'));
  }, [dispatch]);

  if (isLoading) return <Modal spinner={true} />;

  return (
    <Container direction="row">
      {songs && (
        <GridContainer>
          <PagesTitle title="songs you might like" />
          {songs.map(({ _id, songName, songCover, songArtist }) => (
            <SongItem
              key={_id}
              name={songName}
              cover={`http://localhost:9000/${songCover}`}
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
