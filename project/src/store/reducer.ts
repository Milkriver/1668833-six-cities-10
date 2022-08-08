import { createReducer } from '@reduxjs/toolkit';
import { CITY, offers } from '../mock/offers';
import { changeCityAction, changeSortOptionAction } from './action';

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
    .addCase(changeSortOptionAction, (state, action) => {
      state.selectedSortOption = action.payload.sortOption;
    });
});

export { reducer };
