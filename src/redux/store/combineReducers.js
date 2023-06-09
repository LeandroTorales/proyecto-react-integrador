import { combineReducers } from "redux";
import toggleMenuSlice from "../slices/toggleMenuSlice";
import toggleFiltersAsideProductsSlice from "../slices/toggleFiltersAsideProductsSlice";
import seriesSlice from "../slices/seriesSlice";
import productsSlice from "../slices/productsSlice";
import registerSlice from "../slices/registerSlice";
import toggleFormLoginRegisterSlice from "../slices/toggleFormLoginRegisterSlice";
import cartSlice from "../slices/cart/cartSlice";
import ordersSlice from "../slices/orders/ordersSlice";

const reducers = combineReducers({
  toggleMenuSlice: toggleMenuSlice,
  toggleFiltersAsideProductsSlice: toggleFiltersAsideProductsSlice,
  seriesSlice: seriesSlice,
  productsSlice: productsSlice,
  registerSlice: registerSlice,
  toggleFormLoginRegisterSlice: toggleFormLoginRegisterSlice,
  cartSlice: cartSlice,
  ordersSlice: ordersSlice,
});

export default reducers;
