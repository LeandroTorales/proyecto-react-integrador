import { createSlice } from "@reduxjs/toolkit";
import { series } from "../../data/series";

const initialState = {
  series: series,
};

export const seriesSlice = createSlice({
  name: "series",
  initialState: initialState,
  reducer: {
    getSeries: (state) => {
      return state;
    },
  },
});

export const { getSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
