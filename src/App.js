import React, { useState } from 'react';

import './styles/app.scss';

import Song from './components/Song';
import Player from './components/Player';
import data from './data';

const songs = data();

const App = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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
  };

  return (
    <div className="container">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        onChangeSong={handelNextSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default App;
