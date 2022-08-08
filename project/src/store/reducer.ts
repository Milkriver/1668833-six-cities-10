import { createReducer } from '@reduxjs/toolkit';
import { CITY, offers } from '../mock/offers';
import { changeCityAction, changeSortOptionAction, getCityOffersAction } from './action';

const initialState = {
  city: CITY,
  offers: offers,
  selectedSortOption: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCityOffersAction, (state) => {
      state.offers = offers;
    })
    .addCase(changeSortOptionAction, (state, action) => {
      state.selectedSortOption = action.payload.sortOption;
    });
});

export { reducer };
