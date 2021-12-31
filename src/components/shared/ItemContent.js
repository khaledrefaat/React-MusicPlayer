import React from 'react';

const ItemContent = ({ title, description }) => {
  return (
    <div className="item-content">
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default ItemContent;
