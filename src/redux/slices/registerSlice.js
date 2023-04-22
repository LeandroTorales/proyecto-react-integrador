import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: null,
};

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: initialState,
  reducers: {
    setDataUserRegisterForm: (state, action) => {
      return { ...state, dataUser: action.payload };
    },
    resetDataLogout: (state) => {
      return { ...state, dataUser: null };
    },
  },
});

export const { setDataUserRegisterForm, resetDataLogout } = registerSlice.actions;
export default registerSlice.reducer;
