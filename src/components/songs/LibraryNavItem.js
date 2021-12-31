import React from 'react';

import ItemContent from '../shared/ItemContent';

const LibraryNavItem = ({ song, onClick }) => {
  return (
    <div
      className={`library-nav-item ${song.active ? 'active' : ''}`}
      onClick={() => onClick(song)}
    >
      <img src={song.cover} alt={song.name} />
      <ItemContent
        title={song.name}
        description={song.artist}
        className="library-nav-item__description"
      />
    </div>
  );
};

export default LibraryNavItem;
