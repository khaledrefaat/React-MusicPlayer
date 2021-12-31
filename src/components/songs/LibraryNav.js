import React from 'react';
import LibraryNavItem from './LibraryNavItem';

const LibraryNav = ({ songs, setSong, isLibraryOpen }) => {
  const onClickHandler = song => {
    songs.forEach(song => (song.active = false));
    song.active = true;

    const songIndex = songs.findIndex(
      currentSong => currentSong.id === song.id
    );
    setSong(songIndex);
  };

  const renderSongs = songs.map(song => (
    <LibraryNavItem key={song.id} onClick={onClickHandler} song={song} />
  ));

  return (
    <div className={`library-nav ${isLibraryOpen ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default LibraryNav;
