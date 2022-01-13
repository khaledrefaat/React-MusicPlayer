import React, { useState } from 'react';
import Container from '../components/shared/Container';
import Form from '../components/shared/Form';
import CustomButton from '../components/shared/CustomButton';
import Input from '../components/shared/Input';

import svg from '../assets/Alone.svg';

import FileUpload from '../components/shared/FileUpload';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <Container className="auth">
      <div className="auth__card">
        <div
          style={{ backgroundImage: `url(${svg})` }}
          className="auth__card--image"
        />
        <Form className="auth-form">
          {!isLoginMode && (
            <Input placeholder="name" id="name" name="name" type="text" />
          )}
          <Input placeholder="email" id="email" name="email" type="email" />
          <Input
            placeholder="password"
            type="password"
            name="password"
            id="password"
          />
          {!isLoginMode && (
            <>
              <Input
                placeholder="password confirmation"
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
              />
              <FileUpload />
            </>
          )}
          <CustomButton>Submit</CustomButton>
          <div>
            <span>
              {isLoginMode
                ? "Don't have an account?"
                : 'Already have an account? '}
            </span>
            <CustomButton
              type="button"
              onClick={() => setIsLoginMode(isLoginMode => !isLoginMode)}
              memberButton={true}
            >
              {isLoginMode ? 'SignUp' : 'Login'}
            </CustomButton>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Auth;
