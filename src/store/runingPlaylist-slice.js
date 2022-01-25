import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentPlaylist: {},
  activeSongIndex: 0,
  localSettings: { volume: null, muted: false },
  isLoading: false,
  error: null,
};

const runingPlayistSlice = createSlice({
  name: 'runingPlaylist',
  initialState,
  reducers: {
    setCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload;
    },
    setActiveSong(state, action) {
      const currentPlaylist = current(state.currentPlaylist.songs);
      if (typeof action.payload === 'object') {
        state.activeSongIndex = action.payload.index;
      } else if (
        action.payload === 1 &&
        state.activeSongIndex === currentPlaylist.length - 1
      ) {
        state.activeSongIndex = 0;
      } else if (action.payload === -1 && state.activeSongIndex === 0) {
        state.activeSongIndex = currentPlaylist.length - 1;
      } else {
        state.activeSongIndex = state.activeSongIndex + action.payload;
      }
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLocalSettings(state, action) {},
  },
});

// actions

export const fetchPlaylist = playlistId => async dispatch => {
  dispatch(runingPlayistSlice.actions.setLoading(true));
  try {
    const res = await axios.get(
      `http://localhost:9000/api/playlists/${playlistId}`
    );

    dispatch(runingPlayistSlice.actions.setCurrentPlaylist(res.data));
    dispatch(runingPlayistSlice.actions.setLoading(false));
  } catch (err) {
    dispatch(runingPlayistSlice.actions.setLoading(false));
    dispatch(runingPlayistSlice.actions.setError(err.response.data.message));
  }
};

export const playlistActions = runingPlayistSlice.actions;

export default runingPlayistSlice.reducer;
