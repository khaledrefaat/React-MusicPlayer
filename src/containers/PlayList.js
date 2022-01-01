import React, { useState } from 'react';

import Song from '../components/songs/Song';
import Player from '../components/songs/Player';
import data from '../data';
import LibraryNav from '../components/songs/LibraryNav';
import LibraryToggleIcon from '../components/songs/LibraryToggleIcon';
import Container from '../components/shared/Container';

const PlayList = () => {
  const [songs, setSongs] = useState(data());
  const [songIndex, setSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const setActiveSong = index => {
    const songsArr = songs;
    songsArr.forEach(song => (song.active = false));
    songsArr[index].active = true;
    setSongs(songsArr);
  };

  const handelNextSong = direction => {
    let index = 0;
    if (songIndex === 0 && direction < 0) {
      index = songs.length - 1;
    } else if (songIndex === songs.length - 1 && direction > 0) {
      index = 0;
    } else {
      index = songIndex + direction;
    }

    setSongIndex(index);
    setCurrentSong(songs[index]);
    setActiveSong(index);
  };

  const handelLibrarySong = index => {
    setCurrentSong(songs[index]);
    setSongIndex(index);
    setActiveSong(index);
  };

  const handelSpaceClick = e => {
    if (e.key === ' ') setIsPlaying(isPlaying => !isPlaying);
  };

  const handelItemClick = song => {
    const index = songs.findIndex(currentSong => currentSong.id === song.id);
    setCurrentSong(songs[index]);
    setActiveSong(index);
  };

  return (
    <Container tabIndex={0} onKeyDown={handelSpaceClick}>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        onChangeSong={handelNextSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <LibraryNav
        isLibraryOpen={isLibraryOpen}
        setSong={handelLibrarySong}
        songs={songs}
        onItemClick={handelItemClick}
      />
      <LibraryToggleIcon setIsLibraryOpen={setIsLibraryOpen} />
    </Container>
  );
};

export default PlayList;
