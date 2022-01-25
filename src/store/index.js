import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import dataSlice from './data-slice';
import runingPlaylistSlice from './runingPlaylist-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
    runingPlaylist: runingPlaylistSlice,
  },
});

export default store;
