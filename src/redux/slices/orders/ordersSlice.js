import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  loading: false,
};

const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: initialState,
  reducers: {
    fetchOrdersStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchOrderSuccess: (state, action) => {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    },
    fetchOrdersFail: (state) => {
      return {
        ...state,
        loading: false,
        orders: null,
      };
    },
    createOrderFail: (state) => {
      return {
        ...state,
        loading: false,
        orders: null,
      };
    },
    clearOrders: (state) => {
      return { ...state, orders: null };
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrderSuccess,
  fetchOrdersFail,
  createOrderFail,
  clearOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
