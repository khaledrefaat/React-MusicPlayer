import React from 'react';

const Form = ({ onSubmit, children, ...props }) => {
  return (
    <form className="form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
