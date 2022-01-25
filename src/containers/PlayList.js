import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Song from '../components/songs/Song';
import Player from '../components/songs/Player';
import LibraryNav from '../components/songs/LibraryNav';
import LibraryToggleIcon from '../components/songs/LibraryToggleIcon';
import Container from '../components/shared/Container';
import Modal from '../components/shared/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist } from '../store/runingPlaylist-slice';
import { playlistActions } from '../store/runingPlaylist-slice';

const PlayList = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const dispatch = useDispatch();

  const { currentPlaylist, activeSongIndex, isLoading, error } = useSelector(
    state => state.runingPlaylist
  );

  const { playlistId } = useParams();

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId));
  }, [dispatch, playlistId]);

  const handelNextSong = direction =>
    dispatch(playlistActions.setActiveSong(direction));

  useEffect(() => {}, [activeSongIndex]);

  const handelSpaceClick = e => {
    if (e.key === ' ') setIsPlaying(isPlaying => !isPlaying);
  };

  const handelItemClick = index => {
    dispatch(playlistActions.setActiveSong({ index: index }));
  };

  if (isLoading) return <Modal spinner />;

  if (error)
    return (
      <Container className="center">
        <h1>{error}</h1>
      </Container>
    );

  if (currentPlaylist.songs && currentPlaylist.songs.length === 0) {
    return (
      <Container className="center">
        <h1>There is no songs in this playlist.</h1>
      </Container>
    );
  }

  return (
    <Container
      onClick={() => setIsLibraryOpen(false)}
      tabIndex={0}
      onKeyDown={handelSpaceClick}
    >
      {currentPlaylist.songs && (
        <>
          <Song currentSong={currentPlaylist.songs[activeSongIndex]} />
          <Player
            currentSong={currentPlaylist.songs[activeSongIndex]}
            onChangeSong={handelNextSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <LibraryNav
            isLibraryOpen={isLibraryOpen}
            songs={currentPlaylist.songs}
            onItemClick={handelItemClick}
          />
          <LibraryToggleIcon setIsLibraryOpen={setIsLibraryOpen} />
        </>
      )}
    </Container>
  );
};

export default PlayList;
