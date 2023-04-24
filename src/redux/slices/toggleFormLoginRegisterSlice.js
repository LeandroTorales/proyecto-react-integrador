import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleForm: false,
};

const toggleFormLoginRegisterSlice = createSlice({
  name: "toggleFormLoginRegister",
  initialState: initialState,
  reducers: {
    toggleFormAction: (state) => {
      return { ...state, toggleForm: !state.toggleForm };
    },
  },
});

export const { toggleFormAction } = toggleFormLoginRegisterSlice.actions;
export default toggleFormLoginRegisterSlice.reducer;
