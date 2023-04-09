import { combineReducers } from "redux";
import toggleMenuSlice from "../slices/toggleMenuSlice";
import toggleFiltersAsideProductsSlice from "../slices/toggleFiltersAsideProductsSlice";
import seriesSlice from "../slices/seriesSlice";
import productsSlice from "../slices/productsSlice";

const reducers = combineReducers({
  toggleMenuSlice: toggleMenuSlice,
  toggleFiltersAsideProductsSlice: toggleFiltersAsideProductsSlice,
  seriesSlice: seriesSlice,
  productsSlice: productsSlice,
});

export default reducers;
