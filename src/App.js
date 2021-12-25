import React, { useState, useEffect } from 'react';

import './styles/app.scss';

import Song from './components/Song';
import Player from './components/Player';
import data from './data';

const songs = data();

const App = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState();

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

  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [currentSong, audio]);

  const onSongPlayHandel = audio => {
    setAudio(audio);
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(isPlaying => !isPlaying);
  };

  return (
    <div className="container">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        onPlay={onSongPlayHandel}
        onChangeSong={handelNextSong}
      />
    </div>
  );
};

export default App;
