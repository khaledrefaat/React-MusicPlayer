import React from 'react';
import Container from '../components/shared/Container';
import Form from '../components/shared/Form';
import FormButton from '../components/shared/FormButton';
import Input from '../components/shared/Input';

const Upload = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="Name" required />
        <Input placeholder="Artist Name" required />
        <Input placeholder="Cover" required />
        <FormButton>Submit</FormButton>
      </Form>
    </Container>
  );
};

export default Upload;
