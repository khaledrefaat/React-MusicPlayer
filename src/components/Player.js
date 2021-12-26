import React, { useRef, useEffect, useState } from 'react';

import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as SkipBack } from '../assets/caret-back.svg';
import { ReactComponent as SkipForward } from '../assets/caret-forward.svg';

const Player = ({ isPlaying, setIsPlaying, onChangeSong, currentSong }) => {
  const [audioDuration, setAudioDuration] = useState('0:00');
  const [currentTime, setCurrentTime] = useState('0:00');
  const audioRef = useRef();

  useEffect(() => {
    // when switching to next song keep the audio playing only if the music was playing before switching
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong, setIsPlaying, isPlaying]);

  const handelSongOnPlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(isPlaying => !isPlaying);
  };

  const timeUpdateHandler = e => {
    setAudioDuration(e.target.duration);
    setCurrentTime(e.target.currentTime);
  };

  const calcTime = time => {
    return time < 10 || time % 60 < 10
      ? `${Math.floor(time / 60)}:0${Math.floor(time % 60)}`
      : `${Math.floor(time / 60)}:${Math.floor(time % 60)}`;
  };

  return (
    <div className="player">
      <h1>Player</h1>
      <div className="player__timer">
        <span className="player__timer--start">
          {calcTime(currentTime) !== 'NaN:NaN' && calcTime(currentTime)
            ? calcTime(currentTime)
            : '0:00'}
        </span>
        <input type="range" />
        <span className="player__timer--end">
          {calcTime(audioDuration) !== 'NaN:NaN' && calcTime(audioDuration)
            ? calcTime(audioDuration)
            : '0:00'}
        </span>
      </div>
      <div className="player__icons--container">
        <SkipBack onClick={() => onChangeSong(-1)} className="player__icon" />
        <PlayIcon
          onClick={handelSongOnPlay}
          className="player__icon player__icon--play"
        />
        <SkipForward onClick={() => onChangeSong(1)} className="player__icon" />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
