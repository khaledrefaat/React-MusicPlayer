import React from 'react';
import Container from '../components/shared/Container';
import Form from '../components/FormElements/Form';
import CustomButton from '../components/shared/CustomButton';
import Input from '../components/FormElements/Input';

const Upload = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="Name" required />
        <Input placeholder="Artist Name" required />
        <Input placeholder="Cover" required />
        <CustomButton>Submit</CustomButton>
      </Form>
    </Container>
  );
};

export default Upload;
