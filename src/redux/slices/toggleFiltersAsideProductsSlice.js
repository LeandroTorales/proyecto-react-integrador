import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openFiltersAside: false,
};

const toggleFiltersAsideProductsSlice = createSlice({
  name: "toggleFiltersAsideProducts",
  initialState: initialState,
  reducers: {
    toggleFiltersAside: (state) => {
      return { ...state, openFiltersAside: !state.openFiltersAside };
    },
  },
});

export const { toggleFiltersAside } = toggleFiltersAsideProductsSlice.actions;
export default toggleFiltersAsideProductsSlice.reducer;
