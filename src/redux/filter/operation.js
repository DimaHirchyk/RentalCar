import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFilter = createAsyncThunk(
  "filters/fetchByFilters",
  async (
    {
      page = 1,
      limit = 12,
      brand = "",
      rentalPrice = "",
      minMileage = "",
      maxMileage = "",
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.get("/cars", {
        params: {
          page,
          limit,
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        },
      });

      return response.data;
    } catch (error) {
      console.log("❌ error from API:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
