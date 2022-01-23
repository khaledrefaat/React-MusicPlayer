import React, { useState, useContext } from 'react';
import Form from '../components/FormElements/Form';
import CustomButton from '../components/shared/CustomButton';
import Input from '../components/FormElements/Input';

import svg from '../assets/Alone.svg';
import BackgroundPattern from '../components/shared/BackgroundPattern';

import { useForm } from '../components/hooks/form-hook';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../components/util/validation';

import { useDispatch } from 'react-redux';
import { auth } from '../store/auth/auth-actions';
import { useSelector } from 'react-redux';
import { authActions } from '../store/auth/auth-slice';

const Auth = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [isLoginMode, setIsLoginMode] = useState(true);

  const error = useSelector(state => state.auth.error);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (isLoginMode) {
      return dispatch(
        auth({
          type: 'login',
          data: {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          },
        })
      );
    }

    dispatch(
      auth({
        type: 'signup',
        data: {
          username: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          passwordConfirmation: formState.inputs.passwordConfirmation.value,
        },
      })
    );
  };

  const switchModeHandler = () => {
    dispatch(authActions.clearError());
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          passwordConfirmation: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
          passwordConfirmation: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode(isLoginMode => !isLoginMode);
  };

  return (
    <BackgroundPattern className="auth">
      <div className="auth__card" style={{ backgroundImage: `url(${svg})` }}>
        {error && <p>{error}</p>}
        <Form onSubmit={submitHandler} className="auth-form">
          {!isLoginMode && (
            <Input
              placeholder="name"
              id="name"
              name="name"
              type="text"
              validators={[VALIDATOR_REQUIRE]}
              errorText="Please enter a name!"
              initialValue={formState.inputs.name.value}
              initialValid={formState.inputs.name.isValid}
              onInput={inputHandler}
              required
            />
          )}
          <Input
            placeholder="email"
            id="email"
            name="email"
            type="email"
            required
            errorText="Please enter a valid email!"
            validators={[VALIDATOR_EMAIL()]}
            initialValue={formState.inputs.email.value}
            initialValid={formState.inputs.email.isValid}
            onInput={inputHandler}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            id="password"
            required
            errorText="Please enter a valid password, at least 6 chars"
            validators={[VALIDATOR_MINLENGTH(6)]}
            initialValue={formState.inputs.password.value}
            initialValid={formState.inputs.password.isValid}
            onInput={inputHandler}
          />
          {!isLoginMode && (
            <Input
              placeholder="password confirmation"
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              required
              errorText="Please enter a valid password, at least 6 chars"
              validators={[VALIDATOR_MINLENGTH(6)]}
              initialValue={formState.inputs.passwordConfirmation.value}
              initialValid={formState.inputs.passwordConfirmation.isValid}
              onInput={inputHandler}
            />
          )}
          <CustomButton
            disabled={!formState.isValid}
            className={`${!formState.isValid ? 'disable' : ''}`}
          >
            {isLoginMode ? 'Login' : 'Sign Up'}
          </CustomButton>
          <div>
            <span>
              {isLoginMode
                ? "Don't have an account?"
                : 'Already have an account? '}
            </span>
            <CustomButton
              type="button"
              onClick={switchModeHandler}
              memberButton
            >
              {isLoginMode ? 'Sign Up' : 'Login'}
            </CustomButton>
          </div>
        </Form>
      </div>
    </BackgroundPattern>
  );
};

export default Auth;
