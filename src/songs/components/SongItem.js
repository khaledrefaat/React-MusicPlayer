import React from 'react';

const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <img src={song.cover} alt={song.name} />
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
};

export default SongItem;
