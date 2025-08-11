import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./car/carsSlice";
import filterSlice from "./filter/slice";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    filters: filterSlice,
  },
});
