import { createSlice } from "@reduxjs/toolkit";
import { getFilter } from "./operation";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    filteredItems: {
      items: [],
      totalCars: 0,
      page: 1,
      totalPages: 1,
      lastFilters: {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      },
      loading: false,
      error: false,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetFilters: (state) => {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
      state.filteredItems.lastFilters = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFilter.pending, (state) => {
        state.filteredItems.loading = true;
      })
      .addCase(getFilter.fulfilled, (state, action) => {
        state.filteredItems.loading = false;
        state.filteredItems.error = null;
        const payload = action.payload;
        const newItems = Array.isArray(payload.cars) ? payload.cars : [];
        const page = Number(payload.page) || 1;
        const totalCars = payload.totalCars || 0;
        const totalPages = payload.totalPages || 1;

        const currentFilters = {
          brand: action.meta.arg.brand || "",
          rentalPrice: action.meta.arg.rentalPrice || "",
          minMileage: action.meta.arg.minMileage || "",
          maxMileage: action.meta.arg.maxMileage || "",
        };
        const filtersChanged = Object.keys(currentFilters).some(
          (key) => currentFilters[key] !== state.filteredItems.lastFilters[key]
        );
        if (page === 1 || filtersChanged) {
          state.filteredItems.items = newItems;
          state.filteredItems.noResults = newItems.length === 0;
        } else {
          const existingIds = new Set(
            state.filteredItems.items.map((car) => car.id)
          );
          const uniqueNewItems = newItems.filter(
            (car) => !existingIds.has(car.id)
          );
          state.filteredItems.items.push(...uniqueNewItems);
        }

        state.filteredItems.page = page;
        state.filteredItems.totalCars = totalCars;
        state.filteredItems.totalPages = totalPages;
        state.filteredItems.lastFilters = currentFilters;
      })
      .addCase(getFilter.rejected, (state) => {
        state.filteredItems.loading = false;
        state.filteredItems.error = true;
      });
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
