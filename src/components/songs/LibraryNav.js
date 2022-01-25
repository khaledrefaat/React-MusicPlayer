import React from 'react';
import LibraryNavItem from './LibraryNavItem';

const LibraryNav = ({ songs, isLibraryOpen, onItemClick }) => {
  const renderSongs = songs.map((song, index) => (
    <LibraryNavItem
      key={index}
      onClick={onItemClick}
      song={song}
      index={index}
    />
  ));

  return (
    <div
      onClick={e => e.stopPropagation()}
      className={`library-nav ${isLibraryOpen ? 'active' : ''}`}
    >
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default LibraryNav;
