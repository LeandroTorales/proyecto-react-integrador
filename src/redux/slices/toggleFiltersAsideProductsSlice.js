import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openFiltersAside: false,
  filter: null,
  filterValue: null,
};

const toggleFiltersAsideProductsSlice = createSlice({
  name: "toggleFiltersAsideProducts",
  initialState: initialState,
  reducers: {
    toggleFiltersAside: (state) => {
      return { ...state, openFiltersAside: !state.openFiltersAside };
    },
    filterAction: (state, action) => {
      return { ...state, filter: action.payload };
    },
    filterValueAction: (state, action) => {
      return { ...state, filterValue: action.payload };
    },
    clearFilterAction: (state) => {
      return {
        ...state,
        filter: initialState.filter,
        filterValue: initialState.filterValue,
      };
    },
  },
});

export const { toggleFiltersAside, filterAction, clearFilterAction, filterValueAction } =
  toggleFiltersAsideProductsSlice.actions;
export default toggleFiltersAsideProductsSlice.reducer;
