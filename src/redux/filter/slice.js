import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./getBrand";

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    selectFilter: {
      brand: "",
    },
    loading: false,
    error: false,
  },
  reducers: {
    setSelectBrands(state, action) {
      state.selectFilter.brand = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getBrands.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default brandsSlice.reducer;
