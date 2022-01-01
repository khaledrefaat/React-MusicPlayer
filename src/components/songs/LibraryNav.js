import React from 'react';
import LibraryNavItem from './LibraryNavItem';

const LibraryNav = ({ songs, isLibraryOpen, onItemClick }) => {
  const renderSongs = songs.map(song => (
    <LibraryNavItem key={song.id} onClick={onItemClick} song={song} />
  ));

  return (
    <div className={`library-nav ${isLibraryOpen ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default LibraryNav;
