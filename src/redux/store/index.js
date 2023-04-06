import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineReducers";

const store = configureStore({
  reducer: reducer,
});

export default store;
