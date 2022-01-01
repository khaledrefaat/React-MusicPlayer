import React from 'react';

const Input = ({ label, type = 'text', ...props }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} {...props} />
      <span class="input-group__bar"></span>
    </div>
  );
};

export default Input;
