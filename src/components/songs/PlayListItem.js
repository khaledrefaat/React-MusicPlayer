import React from 'react';
import { Link } from 'react-router-dom';
import ItemContent from '../shared/ItemContent';

const PlayListItem = ({ playlist }) => {
  console.log(playlist);
  return (
    <div className="playlist-item">
      <Link to={`/playlist/${playlist.id}`}>
        <div className="playlist-item__img">
          <img src={playlist.cover} alt={playlist.name} />
        </div>
        <ItemContent
          className="playlist-item__content"
          title={playlist.name}
          description={`By ${playlist.artist}`}
        />
      </Link>
    </div>
  );
};

export default PlayListItem;
