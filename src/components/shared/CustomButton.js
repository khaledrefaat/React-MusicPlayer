import React from 'react';

const FormButton = ({
  children,
  onClick,
  fileButton,
  memberButton,
  className,
  ...props
}) => {
  console.log(memberButton);
  return (
    <button
      {...props}
      className={`form-button ${memberButton ? 'member-button' : ''} ${
        fileButton ? 'file-button' : ''
      } ${className ? className : ''}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
