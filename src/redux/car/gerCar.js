import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/BASE_URL.JS";

axios.defaults.baseURL = BASE_URL;

export const getAllCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, brand = null }, thunkAPI) => {
    try {
      const params = { page };
      if (brand) {
        params.make = brand;
      }
      const response = await axios.get("/cars", { params: { page } });

      // console.log(response.data);
      const { cars, totalCars, totalPages } = response.data;

      return { cars, page, totalCars, totalPages };
    } catch (error) {
      console.log("❌ error from API:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
