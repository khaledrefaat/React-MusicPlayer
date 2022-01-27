import React from 'react';

const FormButton = ({
  children,
  onClick,
  fileButton,
  memberButton,
  className,
  svg,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`form-button ${memberButton ? 'member-button' : ''} ${
        fileButton ? 'file-button' : ''
      } ${className ? className : ''}`}
      onClick={onClick}
    >
      {svg}
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
