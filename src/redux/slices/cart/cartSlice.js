import { createSlice } from "@reduxjs/toolkit";
import {
  addProductCart,
  calculateShippingCost,
  getTotalPriceCart,
  modificateQuantityProductInCart,
  removeProductCart,
} from "./utils/functionsCart";

const initialState = {
  productsInCartArr: [],
  shippingCost: 3500,
  priceOfCart: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCartProductAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: addProductCart(state.productsInCartArr, action.payload),
      };
    },
    modificateQuantityProductInCartAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: modificateQuantityProductInCart(state.productsInCartArr, action.payload),
      };
    },
    removeProductFromCartAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: removeProductCart(state.productsInCartArr, action.payload),
      };
    },
    getShippingCostAction: (state) => {
      return {
        ...state,
        shippingCost: calculateShippingCost(state.productsInCartArr),
      };
    },
    getTotalPriceCartAction: (state) => {
      return {
        ...state,
        priceOfCart: getTotalPriceCart(state.productsInCartArr),
      };
    },
  },
});

export const {
  addToCartProductAction,
  removeProductFromCartAction,
  clearCartAction,
  modificateQuantityProductInCartAction,
  getTotalPriceCartAction,
  getShippingCostAction,
} = cartSlice.actions;
export default cartSlice.reducer;
