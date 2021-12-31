import React from 'react';

const Container = ({ children, direction, ...props }) => {
  return (
    <div
      className={`container ${direction === 'row' ? 'direction-row' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
