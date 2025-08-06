import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../catalogList/catalogList";
import { useEffect, useState } from "react";
import { getBrands } from "../redux/filter/getBrand";
import { Autocomplete, TextField } from "@mui/material";
import { selectBrands } from "../redux/filter/selector";
import LoadMoreButton from "../components/LoadMoreButton";
import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from "../redux/car/selector";
import { getAllCars } from "../redux/car/gerCar";

const Catalog = () => {
  const dispatch = useDispatch();

  const listAllCars = useSelector(selectCars);

  const filterBrand = useSelector(selectBrands);
  const [selectBrand, setSelectedBrand] = useState("");

  const curentPage = useSelector(selectCurrentPage);
  const totalPage = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCars({ page: 1, brand: selectBrand }));
  }, [dispatch, selectBrand]);

  const handlLoadMore = () => {
    if (curentPage && totalPage && curentPage < totalPage) {
      dispatch(
        getAllCars({
          page: curentPage + 1,
          brand: selectBrand,
        })
      );
    }
  };

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
              options={filterBrand}
              value={selectBrand}
              onChange={(_, value) => setSelectedBrand(value)}
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
          <CatalogList cars={listAllCars} selectBrand={selectBrand} />
          {curentPage < totalPage && <LoadMoreButton onClick={handlLoadMore} />}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
