import { createReducer } from '@reduxjs/toolkit';
import { CITY, offers } from '../mock/offers';
import { changeCityAction, getCityOffersAction } from './action';

const initialState = {
  city: CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getCityOffersAction, (state) => {
      state.offers = offers;
    });
});

export { reducer };
