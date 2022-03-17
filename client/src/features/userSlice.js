// iserSlice.js
import { createSlice } from "@reduxjs/toolkit";

// userSlice
export const userSlice = createSlice({
  // user data => initialState
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // login
    login: (state, action) => {
      state.user = action.payload;
    },
    // logout
    logout: (state) => {
      state.user = null;
    },
  },
});

// export[login, logout => action]
export const { login, logout } = userSlice.actions;

// export[user state]
export const selectUser = (state) => state.user.user;

// export[default userSlice => reducer]
export default userSlice.reducer;
