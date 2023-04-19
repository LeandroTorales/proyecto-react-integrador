import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  products: products,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducer: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
