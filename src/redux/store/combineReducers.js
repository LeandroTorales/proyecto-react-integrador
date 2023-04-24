import { combineReducers } from "redux";
import toggleMenuSlice from "../slices/toggleMenuSlice";
import toggleFiltersAsideProductsSlice from "../slices/toggleFiltersAsideProductsSlice";
import seriesSlice from "../slices/seriesSlice";
import productsSlice from "../slices/productsSlice";
import registerSlice from "../slices/registerSlice";
import toggleFormLoginRegisterSlice from "../slices/toggleFormLoginRegisterSlice";

const reducers = combineReducers({
  toggleMenuSlice: toggleMenuSlice,
  toggleFiltersAsideProductsSlice: toggleFiltersAsideProductsSlice,
  seriesSlice: seriesSlice,
  productsSlice: productsSlice,
  registerSlice: registerSlice,
  toggleFormLoginRegisterSlice: toggleFormLoginRegisterSlice,
});

export default reducers;
