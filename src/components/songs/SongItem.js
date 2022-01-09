import React from 'react';
import { Link } from 'react-router-dom';
import ItemContent from '../shared/ItemContent';

const SongItem = ({ cover, name, artist, link }) => {
  return (
    <div className="song-item">
      <Link to={link}>
        <div className="item-item__img">
          <img src={cover} alt={name} />
        </div>
        <ItemContent title={name} description={artist} />
      </Link>
    </div>
  );
};

export default SongItem;
