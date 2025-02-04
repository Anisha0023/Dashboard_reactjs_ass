// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: { data: null },
//   reducers: {
//     saveUser: (state, action) => {
//       localStorage.setItem("user", JSON.stringify(action.payload));
//       state.data = action.payload;
//     }
//   }
// });

// export const { saveUser } = userSlice.actions;
// export default userSlice.reducer; //  Exporting reducer as default

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
