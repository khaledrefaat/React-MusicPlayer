import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  userId: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload.message) {
        state.error = action.payload.message;
      }
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      const tokenExpirationDate =
        action.payload.expirationDate ||
        new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7); // 7d
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
          expirationDate: tokenExpirationDate,
        })
      );
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
