import React from 'react';

const FormButton = ({
  children,
  onClick,
  fileButton,
  memberButton,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`form-button ${memberButton ? 'member-button' : ''} ${
        fileButton ? 'file-button' : ''
      }`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
