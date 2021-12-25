import React, { useRef } from 'react';

import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as SkipBack } from '../assets/caret-back.svg';
import { ReactComponent as SkipForward } from '../assets/caret-forward.svg';

const Player = ({ onPlay, onChangeSong, currentSong }) => {
  const audioRef = useRef();

  return (
    <div className="player">
      <h1>Player</h1>
      <div className="player__timer">
        <span className="player__timer--start">Start Time</span>
        <input type="range" />
        <span className="player__timer--end">End Time</span>
      </div>
      <div className="player__icons--container">
        <SkipBack onClick={() => onChangeSong(-1)} className="player__icon" />
        <PlayIcon
          onClick={() => onPlay(audioRef.current)}
          className="player__icon player__icon--play"
        />
        <SkipForward onClick={() => onChangeSong(1)} className="player__icon" />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
