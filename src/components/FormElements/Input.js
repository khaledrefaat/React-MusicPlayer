import React, { useEffect, useReducer } from 'react';

import { validate } from '../util/validation';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Input = ({
  label,
  id,
  validators,
  onInput,
  errorText,
  initialValue,
  initialValid,
  ...restProps
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: initialValid || false,
    isTouched: false,
  });

  const changeHandler = e =>
    dispatch({ type: 'CHANGE', value: e.target.value, validators });

  const onTouch = () => dispatch({ type: 'TOUCH' });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  return (
    <div
      className={`input-group ${
        !inputState.isValid && inputState.isTouched && errorText ? 'error' : ''
      }`}
    >
      <input onChange={changeHandler} onBlur={onTouch} {...restProps} />
      <span className="input-group__bar"></span>
      <p>{!inputState.isValid && inputState.isTouched && errorText}</p>
    </div>
  );
};

export default Input;
