import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBrands } from "../utils/fetchBrands";
import { resetFilters, setFilters } from "../redux/filter/slice";
import { getFilter } from "../redux/filter/operation";
import { selectFiltersValue } from "../redux/filter/selector";

const Filter = () => {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]); // масив брендів

  useEffect(() => {
    async function getBrands() {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getBrands();
  }, []);

  const filters = useSelector(selectFiltersValue);
  const [selectBrand, setSelectedBrand] = useState(filters.brand || "");

  useEffect(() => {
    setSelectedBrand(filters.brand || "");
  }, [filters.brand]);

  const handleMileageChange = (e) => {
    const { name, value } = e.target;
    // Видаляємо всі символи, крім цифр
    const numericValue = value.replace(/\D/g, "");
    // Форматуємо з комами (тільки якщо щось ввели)
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString("en-US")
      : "";
    dispatch(setFilters({ name, value: formattedValue }));
  };

  const handleSearch = () => {
    const cleanMileage = (val) => val.replace(/,/g, "");
    dispatch(
      getFilter({
        page: 1,
        limit: 12,
        ...filters,
        minMileage: cleanMileage(filters.minMileage),
        maxMileage: cleanMileage(filters.maxMileage),
      })
    );
  };
  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(getFilter({ page: 1, limit: 12 }));
  };

  return (
    <form className="flex gap-5 items-end">
      <div className="flex flex-col gap-2">
        <label className="text-gray-400 text-xs">Car brand</label>

        <Autocomplete
          disablePortal
          options={brands}
          value={selectBrand}
          onChange={(_, value) => {
            setSelectedBrand(value);
            dispatch(setFilters({ name: "brand", value: value || "" }));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Choose a brand"
              className="bg-gray-100 rounded-md"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  padding: "0 12px",
                  backgroundColor: "#f3f4f6",
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#f3f4f6",
                    boxShadow: "none",
                  },
                },
                "& .MuiAutocomplete-input": {
                  padding: "0 !important",
                },
              }}
            />
          )}
          sx={{
            width: 200,
            "& .MuiAutocomplete-popupIndicator": {
              color: "gray",
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400 text-xs">Price/ 1 hour</label>
        <Autocomplete
          disablePortal
          options={Array.from({ length: 18 }, (_, i) => `$${30 + i * 10}`)}
          value={filters.rentalPrice ? `$${filters.rentalPrice}` : null}
          onChange={(_, value) => {
            const numericValue = value ? value.replace("$", "") : "";
            dispatch(setFilters({ name: "rentalPrice", value: numericValue }));
          }}
          sx={{
            width: 200,
            "& .MuiAutocomplete-popupIndicator": {
              color: "gray",
            },
            "& .MuiOutlinedInput-root": {
              height: "40px",
              padding: "0 12px",
              backgroundColor: "#f3f4f6",
              "& fieldset": { border: "none" },
              "&:hover": { backgroundColor: "#e5e7eb" },
              "&.Mui-focused": {
                backgroundColor: "#f3f4f6",
                boxShadow: "none",
              },
            },
            "& .MuiAutocomplete-input": {
              padding: "0 !important",
            },
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose your hour" />
          )}
        />
      </div>{" "}
      <div>
        <label className="text-gray-400 text-xs ">
          Car mileage / km
          <div className="space-x-3 mt-1">
            <input
              className="w-[200px] h-10 px-3 bg-gray-100 rounded-md border-none outline-none
                 hover:bg-gray-200 focus:bg-gray-100 focus:shadow-none"
              type="text"
              name="minMileage"
              value={filters.minMileage}
              onChange={handleMileageChange}
              placeholder="From"
              pattern="[0-9]*"
            />
            <input
              className="w-[200px] h-10 px-3 bg-gray-100 rounded-md border-none outline-none
                 hover:bg-gray-200 focus:bg-gray-100 focus:shadow-none"
              type="text"
              name="maxMileage"
              value={filters.maxMileage}
              onChange={handleMileageChange}
              placeholder="To"
              pattern="[0-9]*"
            />
          </div>
        </label>
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
          onClick={handleSearch}>
          Search
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Filter;
