import React from 'react';

const Form = ({ onSubmit, className, children, ...props }) => {
  return (
    <form
      className={` ${className ? className : 'form'}`}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
