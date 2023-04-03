import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: false,
};

const toggleMenuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      return { ...state, openMenu: !state.openMenu };
    },
  },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
