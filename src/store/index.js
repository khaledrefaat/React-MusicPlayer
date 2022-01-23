import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import dataSlice from './data-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
  },
});

export default store;
