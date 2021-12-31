import React from 'react';

import data from '../../data';
import SongItem from './SongItem';

const songs = data();

const SongList = ({ title }) => {
  return title ? (
    <div className="song-list-container">
      <h2 className="songs-list-title">{title}</h2>
      <div className="song-list">
        {songs.map(song => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </div>
  ) : (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
