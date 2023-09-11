import { createSlice } from '@reduxjs/toolkit';
import constants from '../constants';

const userSlice = createSlice({
  name: constants.USER_SLICE,
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
