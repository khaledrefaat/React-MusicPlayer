import React, { useRef, useEffect, useState } from 'react';

import { ReactComponent as PlayIcon } from '../assets/play.svg';
import { ReactComponent as SkipBack } from '../assets/caret-back.svg';
import { ReactComponent as SkipForward } from '../assets/caret-forward.svg';

const Player = ({ isPlaying, setIsPlaying, onChangeSong, currentSong }) => {
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
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

  const dragHandler = e => {
    setCurrentTime(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const calcTime = time => {
    if (time) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      );
    }
    return '0:00';
  };

  return (
    <div className="player">
      <h1>Player</h1>
      <div className="player__timer">
        <span className="player__timer--start">{calcTime(currentTime)}</span>
        <input
          min={0}
          max={audioDuration || 0}
          value={currentTime}
          onChange={dragHandler}
          type="range"
        />
        <span className="player__timer--end">{calcTime(audioDuration)}</span>
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
        onLoadedMetadataCapture={timeUpdateHandler}
        src={currentSong.audio}
        onEnded={() => onChangeSong(1)}
      ></audio>
    </div>
  );
};

export default Player;
