import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/BASE_URL.JS";

axios.defaults.baseURL = BASE_URL;

export const getAllCars = createAsyncThunk(
  "cars/fetchCars",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/cars");

      return response.data;
    } catch (error) {
      console.log("❌ error from API:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
