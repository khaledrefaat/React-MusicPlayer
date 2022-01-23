import { authActions } from './auth-slice';
import axios from 'axios';

export const auth = formData => async dispatch => {
  try {
    const res = await axios.post(
      'http://localhost:9000/api/users/' + formData.type,
      formData.data
    );

    dispatch(authActions.login(res.data));
    dispatch(authActions.clearError());
  } catch (err) {
    dispatch(authActions.login(err.response.data));
  }
};
