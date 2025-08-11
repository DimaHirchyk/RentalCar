export const selectIsError = (state) => state.cars.error;

export const selectCars = (state) => state.cars.items;

export const selectTotalCars = (state) => state.cars.totalCars;
export const selectCurrentPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
