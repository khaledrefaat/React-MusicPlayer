import React from 'react';

import data from '../../data';
import SongItem from './SongItem';

const songs = data();

const SongList = ({ title }) => {
  return (
    <div>
      <style>
        {`
          .songs-list-title {
            text-align: center;
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
        `}
      </style>
      {title && <h2 className="songs-list-title">{title}</h2>}
      <div className="song-list">
        {songs.map(song => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
