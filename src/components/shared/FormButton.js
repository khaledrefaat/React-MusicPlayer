import React from 'react';

const FormButton = ({ children, ...props }) => {
  return (
    <button {...props} className="form-button">
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
