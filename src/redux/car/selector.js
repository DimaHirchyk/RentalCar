export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.loading;
export const selectIsError = (state) => state.cars.error;

export const selectFilterBrand = (state) =>
  state.car ? state.car.brand : null;

export const selectFilteredCars = (state) => {
  const allCars = state.cars.items;
  const filterBrand = state.cars.filter.brand;

  if (!filterBrand) {
    return allCars;
  }

  return allCars.filter((car) => car.brand === filterBrand);
};
