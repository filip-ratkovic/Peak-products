import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  searchInput: ''
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setData(state, actions) {
      const data = actions.payload;
      console.log(data)
      state = data;
      return state;
    },
  },
});
