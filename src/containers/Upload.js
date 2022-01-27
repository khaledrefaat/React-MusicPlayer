import React, { useState, useRef } from 'react';
import Container from '../components/shared/Container';
import Form from '../components/FormElements/Form';
import CustomButton from '../components/shared/CustomButton';
import Input from '../components/FormElements/Input';
import { useForm } from '../components/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../components/util/validation';

import FileUpload from '../components/shared/FileUpload';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Upload = () => {
  const [file, setFile] = useState();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      songArtist: {
        value: '',
        isValid: true,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const token = useSelector(state => state.auth.token);

  const songPickerRef = useRef();

  const handelSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song', file);
    formData.append('songName', formState.inputs.title.value);
    formData.append('songCover', formState.inputs.image.value);
    formData.append('songArtist', formState.inputs.songArtist.value);

    try {
      console.log(token);
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token,
      };

      await axios.post('http://localhost:9000/api/songs', formData, {
        headers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const renderContent = () => (
    <Form onSubmit={handelSubmit}>
      <Input
        placeholder="title"
        id="title"
        name="title"
        type="text"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter a name"
        initialValid={formState.inputs.title.isValid}
        initialValue={formState.inputs.title.value}
        onInput={inputHandler}
        required
      />
      <FileUpload
        boxText="Choose song image"
        id="image"
        onInput={inputHandler}
      />

      <Input
        placeholder="Artist Name"
        id="songArtist"
        name="songArtist"
        type="text"
        initialValid={formState.inputs.songArtist.isValid}
        initialValue={formState.inputs.songArtist.value}
        onInput={inputHandler}
      />
      <CustomButton
        disabled={!formState.isValid}
        className={`${!formState.isValid ? 'disable' : ''}`}
      >
        Submit
      </CustomButton>
    </Form>
  );

  const uploadMusicHandler = () => songPickerRef.current.click();

  const songPickerHandler = e => {
    if (e.target.files && e.target.files.length === 1) {
      setFile(e.target.files[0]);
    }
  };

  console.log(formState);

  return (
    <Container className="upload-song">
      <>
        {!file ? (
          <>
            <input
              id="song"
              style={{ display: 'none' }}
              type="file"
              accept="audio/*"
              ref={songPickerRef}
              onChange={songPickerHandler}
            />

            <CustomButton
              className="upload-song__button"
              fileButton
              onClick={uploadMusicHandler}
            >
              Choose song to upload
            </CustomButton>
          </>
        ) : (
          renderContent()
        )}
      </>
    </Container>
  );
};

export default Upload;
