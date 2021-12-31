import React from 'react';

const ItemContent = ({ title, description, className }) => {
  return (
    <div className={`item-content ${className ? className : ''}`}>
      <h3>{title}</h3>
      {description && <h4>{description}</h4>}
    </div>
  );
};

export default ItemContent;
