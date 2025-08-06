import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./car/carsSlice";
import brandsSlice from "./filter/slice";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    brands: brandsSlice,
  },
});
