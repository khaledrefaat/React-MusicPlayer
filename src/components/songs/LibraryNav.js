import React from 'react';
import LibrarySongItem from './LibrarySongItem';

const Library = ({ songs, setSong, isLibraryOpen }) => {
  const onClickHandler = song => {
    songs.forEach(song => (song.active = false));
    song.active = true;

    const songIndex = songs.findIndex(
      currentSong => currentSong.id === song.id
    );
    setSong(songIndex);
  };

  const renderSongs = songs.map(song => (
    <LibrarySongItem key={song.id} onClick={onClickHandler} song={song} />
  ));

  return (
    <div className={`library ${isLibraryOpen ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default Library;
