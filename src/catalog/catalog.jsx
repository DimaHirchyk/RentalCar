import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../catalogList/catalogList";
import { useEffect } from "react";
import { getFilter } from "../redux/filter/operation";
import LoadMoreButton from "../components/LoadMoreButton";
import { getAllCars } from "../redux/car/gerCar";
import Filter from "../filter/filter";
import {
  selectActiveFilters,
  selectFilteredCars,
  selectFilteredPagination,
  selectFiltersLoading,
} from "../redux/filter/selector";
import Loader from "../Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();

  const { page, totalPages } = useSelector(selectFilteredPagination);
  const filters = useSelector(selectActiveFilters);
  const listAllCars = useSelector(selectFilteredCars);
  const loading = useSelector(selectFiltersLoading);

  useEffect(() => {
    dispatch(getFilter({ page: 1, limit: 12 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCars({ page: 1 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(getFilter({ page: page + 1, ...filters }));
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="px-5">
        <div className="flex gap-4">
          <Filter />
        </div>
        <div>
          {loading && <Loader />}
          {!loading && listAllCars.length === 0 && (
            <p>No cars found with chosen filters</p>
          )}
          <CatalogList cars={listAllCars} />
          {page < totalPages && <LoadMoreButton onClick={handleLoadMore} />}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
