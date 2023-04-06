import { combineReducers } from "redux";
import toggleMenuSlice from "../slices/toggleMenuSlice";
import toggleFiltersAsideProductsSlice from "../slices/toggleFiltersAsideProductsSlice";

const reducer = combineReducers({
  toggleMenuSlice: toggleMenuSlice,
  toggleFiltersAsideProductsSlice: toggleFiltersAsideProductsSlice,
});

export default reducer;
