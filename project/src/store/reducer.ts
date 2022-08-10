import { locations } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City, Offer } from '../types/offer';
import { getCity, changeSortOption, loadOffers, requireAuthorization, setDataLoadedStatus } from './action';

type InitalState = {
  city: City,
  offers: Offer[],
  selectedSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState: InitalState = {
  city: locations.Paris,
  offers: [],
  selectedSortOption: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(changeSortOption, (state, action) => {
      state.selectedSortOption = action.payload.sortOption;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
