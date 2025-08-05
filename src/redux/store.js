import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./car/carsSlice";
import brandsSlice from "./brand/slice";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    brands: brandsSlice,
  },
});
