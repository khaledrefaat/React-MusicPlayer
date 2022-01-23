import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
      localStorage.removeItem('userData');
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// actions

export const auth = formData => async dispatch => {
  try {
    const res = await axios.post(
      'http://localhost:9000/api/users/' + formData.type,
      formData.data
    );

    dispatch(authActions.login(res.data));
    dispatch(authActions.setError(null));
  } catch (err) {
    dispatch(authActions.setError(err.response.data.message));
  }
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
