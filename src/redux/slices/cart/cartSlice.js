import { createSlice } from "@reduxjs/toolkit";
import {
  addProductCart,
  calculateShippingCost,
  modificateQuantityProductInCart,
  removeProductCart,
} from "./utils/functionsCart";

const initialState = {
  productsInCartArr: [],
  shippingCost: 3500,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCartProductAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: addProductCart(state.productsInCartArr, action.payload),
        shippingCost: calculateShippingCost(state.productsInCartArr, state.shippingCost),
      };
    },
    modificateQuantityProductInCartAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: modificateQuantityProductInCart(state.productsInCartArr, action.payload),
        shippingCost: calculateShippingCost(state.productsInCartArr, state.shippingCost),
      };
    },
    removeProductFromCartAction: (state, action) => {
      return {
        ...state,
        productsInCartArr: removeProductCart(state.productsInCartArr, action.payload),
        shippingCost: calculateShippingCost(state.productsInCartArr, state.shippingCost),
      };
    },
    clearCartAction: (state) => {
      return { ...state, productsInCartArr: initialState.productsInCartArr };
    },
  },
});

export const {
  addToCartProductAction,
  removeProductFromCartAction,
  clearCartAction,
  modificateQuantityProductInCartAction,
} = cartSlice.actions;
export default cartSlice.reducer;
