import React from 'react';
import Container from '../components/shared/Container';
import Form from '../components/shared/Form';
import FormButton from '../components/shared/FormButton';
import Input from '../components/shared/Input';

const Auth = () => {
  return (
    <Container>
      <Form>
        <Input placeHolder="name" />
        <Input placeHolder="password" type="password" />
        <FormButton>Submit</FormButton>
      </Form>
    </Container>
  );
};

export default Auth;
