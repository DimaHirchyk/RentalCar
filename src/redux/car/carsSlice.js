import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./gerCar";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.cars;
        state.totalCount = action.payload.totalCount;
        state.currentPage = action.payload.page;
        state.limit = action.payload.limit;
      })
      .addCase(getAllCars.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default carsSlice.reducer;
