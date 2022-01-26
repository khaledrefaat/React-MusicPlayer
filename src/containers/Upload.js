import React from 'react';
import Container from '../components/shared/Container';
import Form from '../components/FormElements/Form';
import CustomButton from '../components/shared/CustomButton';
import Input from '../components/FormElements/Input';
import { useForm } from '../components/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../components/util/validation';

import FileUpload from '../components/shared/FileUpload';

const Upload = () => {
  const [formState, inputHandler] = useForm(
    {
      songName: {
        value: '',
        isValid: false,
      },
      songCover: {
        value: '',
        isValid: false,
      },
      songArtist: {
        value: '',
        isValid: true,
      },
    },
    false
  );

  return (
    <Container>
      <Form>
        <Input
          placeholder="Song Name"
          id="songName"
          name="songName"
          type="text"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a name"
          initialValid={formState.inputs.songName.isValid}
          initialValue={formState.inputs.songName.value}
          onInput={inputHandler}
          required
        />
        <FileUpload />

        <Input
          placeholder="Artist Name"
          id="songArtist"
          name="songArtist"
          type="text"
          initialValid={formState.inputs.songArtist.isValid}
          initialValue={formState.inputs.songArtist.value}
          onInput={inputHandler}
        />
        {/* <Input
          placeholder="Cover"
          id="songCover"
          name="songCover"
          type="text"
          validators={[VALIDATOR_REQUIRE]}
          errorText="Please enter a cover for this song"
          initialValid={formState.inputs.songCover.isValid}
          initialValue={formState.inputs.songCover.value}
          onInput={inputHandler}
          required
        /> */}

        <CustomButton
          disabled={!formState.isValid}
          className={`${!formState.isValid ? 'disable' : ''}`}
        >
          Submit
        </CustomButton>
      </Form>
    </Container>
  );
};

export default Upload;
