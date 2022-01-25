import React from 'react';

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img
        src={`http://localhost:9000/${currentSong.songCover}`}
        alt={currentSong.name}
      />
      <h2>{currentSong.songName}</h2>
      <h3>{currentSong.songArtist || 'Unkown'}</h3>
    </div>
  );
};

export default Song;
