// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.userToken = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
