import React from 'react';

const LibraryNavItem = ({ song, onClick }) => {
  return (
    <div
      className={`library-nav-item ${song.active ? 'active' : ''}`}
      onClick={() => onClick(song)}
    >
      <img src={song.cover} alt={song.name} />
      <div className="library-nav-item__description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryNavItem;
