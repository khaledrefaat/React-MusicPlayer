import React from 'react';
import { Link } from 'react-router-dom';
import ItemContent from '../shared/ItemContent';

const SongItem = ({ item, link }) => {
  return (
    <div className="song-item">
      <Link to={link}>
        <div className="item-item__img">
          <img src={item.cover} alt={item.name} />
        </div>
        <ItemContent title={item.name} description={item.artist} />
      </Link>
    </div>
  );
};

export default SongItem;
