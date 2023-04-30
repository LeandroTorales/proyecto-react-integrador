import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataAllUsersArr: [],
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
    setDataAllUsersAction: (state, action) => {
      return { ...state, dataAllUsersArr: [...state.dataAllUsersArr, action.payload] };
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
  setDataAllUsersAction,
  setDataUserOnLogin,
  isLoginToggleAction,
} = registerSlice.actions;
export default registerSlice.reducer;
