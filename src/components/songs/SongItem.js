import React from 'react';
import { Link } from 'react-router-dom';
import ItemContent from '../shared/ItemContent';

const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <Link to={`/song/${song.id}`}>
        <div className="song-item__img">
          <img src={song.cover} alt={song.name} />
        </div>
        <ItemContent title={song.name} description={song.artist} />
      </Link>
    </div>
  );
};

export default SongItem;
