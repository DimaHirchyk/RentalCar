import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk(
  "brands/getBrand",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");

      return response.data;
    } catch (error) {
      console.log("❌ error from API:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
