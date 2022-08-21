import { locations } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { City, Offer, ReviewResponse } from '../types/offer';
import { getCity, changeSortOption, loadOffers, setDataLoadedStatus, loadComments, loadActiveOffer, loadNearByOffers, loadFavoriteOffers, getUserData } from './action';
import { UserData } from '../types/user-data';

type InitialState = {
  city: City,
  offers: Offer[],
  selectedSortOption: string,
  isDataLoaded: boolean,
  activeOffer: Offer | undefined,
  favoriteOffers: Offer[],
  comments: ReviewResponse[];
  nearByOffers: Offer[],
  userData: UserData | null,
}

const initialState: InitialState = {
  city: locations.Paris,
  offers: [],
  selectedSortOption: 'Popular',
  isDataLoaded: false,
  activeOffer: undefined,
  favoriteOffers: [],
  comments: [],
  nearByOffers: [],
  userData: null,
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
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadNearByOffers, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { reducer };
