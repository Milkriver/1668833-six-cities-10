import { locations } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City, Offer, Review } from '../types/offer';
import { getCity, changeSortOption, loadOffers, requireAuthorization, setDataLoadedStatus, loadComments, loadActiveOffer, loadNearByOffers, loadFavoriteOffers } from './action';

type InitialState = {
  city: City,
  offers: Offer[],
  selectedSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  activeOffer: Offer | undefined,
  favoriteOffers: Offer[],
  comments: Review[];
  nearByOffers: Offer[],
}

const initialState: InitialState = {
  city: locations.Paris,
  offers: [],
  selectedSortOption: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  activeOffer: undefined,
  favoriteOffers: [],
  comments: [],
  nearByOffers: [],
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
    .addCase(loadActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadNearByOffers, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { reducer };
