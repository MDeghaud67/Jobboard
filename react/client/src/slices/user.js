import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authentificated: false,
  data: {

  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.authentificated = true;
      state.data = action.payload;
    },
    update: (state, action) => {
      state.data = action.payload
    },
    logout: (state, action) => {
      state.authentificated = false;
      state.data = {};
    },
  },
})

// Action creators are generated for each case reducer function
export const { onLogin, update, logout } = userSlice.actions

export default userSlice.reducer

