import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  playlists: [],
  users: [],
  userPlaylists: [],
  runingPlaylist: [],
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSongs(state, action) {
      state.songs = action.payload;
    },
    setPlaylists(state, action) {
      state.playlists = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserPlaylists(state, action) {
      state.userPlaylists = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// actions

export const fetch = (url, type) => async dispatch => {
  dispatch(dataSlice.actions.setLoading(true));

  try {
    const res = await axios.get(url);

    switch (type) {
      case 'playlists':
        dispatch(dataSlice.actions.setPlaylists(res.data));
        break;
      case 'users':
        dispatch(dataSlice.actions.setUsers(res.data));
        break;
      case 'userPlaylists':
        dispatch(dataSlice.actions.setUserPlaylists(res.data));
        break;
      default:
        dispatch(dataSlice.actions.setSongs(res.data));
    }

    dispatch(dataSlice.actions.setLoading(false));
  } catch (err) {
    dispatch(dataSlice.actions.setLoading(false));
    dispatch(dataSlice.actions.setError(err.response.data.message));
  }
};

export const dataSliceActions = dataSlice.actions;

export default dataSlice.reducer;
