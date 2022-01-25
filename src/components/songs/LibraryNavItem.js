import React from 'react';

import ItemContent from '../shared/ItemContent';

import { useSelector } from 'react-redux';

const LibraryNavItem = ({ song, onClick, index }) => {
  const activeIndex = useSelector(
    state => state.runingPlaylist.activeSongIndex
  );

  return (
    <div
      className={`library-nav-item ${index === activeIndex ? 'active' : ''}`}
      onClick={() => onClick(index)}
    >
      <img src={`http://localhost:9000/${song.songCover}`} alt={song.name} />
      <ItemContent
        title={song.songName}
        description={song.songArtist || 'Unknown'}
        className="library-nav-item__description"
      />
    </div>
  );
};

export default LibraryNavItem;
