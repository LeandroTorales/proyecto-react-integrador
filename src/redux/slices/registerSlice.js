import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: [],
  isLogin: false,
};

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: initialState,
  reducers: {
    setDataUserRegisterFormAction: (state, action) => {
      return { ...state, dataUser: action.payload };
    },
    logoutAction: (state) => {
      return { ...state, dataUser: initialState.dataUser };
    },
    setDataUserOnLogin: (state, action) => {
      return { ...state, dataUser: action.payload };
    },
    isLoginToggleAction: (state) => {
      return { ...state, isLogin: !state.isLogin };
    },
  },
});

export const {
  setDataUserRegisterFormAction,
  logoutAction,
  setDataUserOnLogin,
  isLoginToggleAction,
} = registerSlice.actions;
export default registerSlice.reducer;
