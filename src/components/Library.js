import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setSong }) => {
  const onClickHandler = song => {
    const songIndex = songs.findIndex(
      currentSong => currentSong.id === song.id
    );
    setSong(songIndex);
  };

  const renderSongs = songs.map(song => (
    <LibrarySong key={song.id} onClick={onClickHandler} song={song} />
  ));

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default Library;
