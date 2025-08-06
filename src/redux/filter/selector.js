import { createSelector } from "@reduxjs/toolkit";

export const selectItems = (state) => state.brands.items;
export const selectBrandsStatus = (state) => state.brands.status;
export const selectBrandsError = (state) => state.brands.error;

export const selectBrands = createSelector(
  [selectItems],
  (items) => items || []
);
