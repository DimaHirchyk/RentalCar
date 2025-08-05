import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../catalogList/catalogList";
import { useEffect } from "react";
import { getBrands } from "../redux/brand/getBrand";
import { Autocomplete, TextField } from "@mui/material";
import { getAllCars } from "../redux/car/gerCar";
import { selectBrands } from "../redux/brand/selector";
import { selectFilterBrand } from "../redux/car/selector";

const Catalog = () => {
  const dispatch = useDispatch();
  const listBrands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectFilterBrand);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="px-5">
        <div
          className="flex gap-4
        ">
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs">Car brand</label>

            <Autocomplete
              disablePortal
              options={listBrands}
              value={selectedBrand}
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
            <label htmlFor="">Price/ 1 hour</label>

            {/* <Autocomplete
              disablePortal
              options={listAllCars.rentalPrice}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            /> */}
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label htmlFor="">From To</label>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            {/* <Autocomplete
            disablePortal
            options={}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
          </div>
        </div>
        <div>
          <CatalogList />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
