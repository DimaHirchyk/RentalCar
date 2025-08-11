import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../catalogList/catalogList";
import { useEffect } from "react";
import { getFilter } from "../redux/filter/operation";
import LoadMoreButton from "../components/LoadMoreButton";
import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from "../redux/car/selector";
import { getAllCars } from "../redux/car/gerCar";
import Filter from "../filter/filter";
import {
  selectActiveFilters,
  selectFilteredPagination,
} from "../redux/filter/selector";

const Catalog = () => {
  const dispatch = useDispatch();

  const { page, totalPages } = useSelector(selectFilteredPagination);
  const filters = useSelector(selectActiveFilters);
  const listAllCars = useSelector(selectCars);
  const curentPage = useSelector(selectCurrentPage);
  const totalPage = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getFilter());
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
          <CatalogList cars={listAllCars} />
          {curentPage < totalPage && (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
