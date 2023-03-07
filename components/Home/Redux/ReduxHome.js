import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allpackages: [],
};

export const offerapp = createSlice({
  name: "offerapp",
  initialState,
  reducers: {
    setallpackages: (state, action) => {
      state.allpackages = action.payload;
    },
  },
});

export const { setallpackages } = offerapp.actions;

// Selectors

export const selectallpackages = (state) => state.offerapp.allpackages;

export default offerapp.reducer;
