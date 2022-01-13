import React from 'react';

const Container = ({ children, direction, className, ...props }) => {
  return (
    <div
      className={`container ${direction === 'row' ? 'direction-row' : ''} ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
