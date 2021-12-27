import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs }) => {
  const renderSongs = songs.map(song => <LibrarySong song={song} />);

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default Library;
