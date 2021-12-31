import React from 'react';
import LibrarySongItem from './LibraryNavItem';

const LibraryList = ({ list, img, title }) => {
  console.log(list);
  return (
    <div className="library-list">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      {list.map(song => (
        <LibrarySongItem song={song} key={song.id} />
      ))}
    </div>
  );
};

export default LibraryList;
