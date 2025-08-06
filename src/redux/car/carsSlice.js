import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./gerCar";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    totalCars: 0,
    totalPages: 1,
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
        const { cars, page, totalCars, totalPages } = action.payload;
        if (page === 1) {
          state.items = cars;
        } else {
          const existingIds = new Set(state.items.map((car) => car.id));
          const newUniqueCars = cars.filter((car) => !existingIds.has(car.id));
          state.items.push(...newUniqueCars);
        }
        state.page = page;
        state.totalCars = totalCars;
        state.totalPages = totalPages;
      })
      .addCase(getAllCars.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default carsSlice.reducer;
