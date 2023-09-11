import { createSlice } from '@reduxjs/toolkit';
import constant from '../constants';

const userSlice = createSlice({
  name: constant.USER_SLICE,
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
