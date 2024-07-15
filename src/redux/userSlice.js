import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null,
  access: localStorage.getItem('access')
    ? JSON.parse(localStorage.getItem('access'))
    : null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      const { others, userAuth } = action.payload;
      state.currentUser = others;
      state.access = userAuth;

      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      localStorage.setItem('access', JSON.stringify(state.access));

      state.error = false;
    },
    loginFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
