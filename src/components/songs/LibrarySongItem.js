import React from 'react';

const LibrarySongItem = ({ song, onClick }) => {
  return (
    <div
      className={`library-song ${song.active ? 'active' : ''}`}
      onClick={() => onClick(song)}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongItem;
