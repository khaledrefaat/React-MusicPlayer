import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../data';
import SongItem from './SongItem';

const songs = data();

const SongList = () => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <div>
          <Link to={`/song/${song.id}`} key={song.id}>
            <SongItem song={song} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SongList;
