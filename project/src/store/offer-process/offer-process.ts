import { createSlice } from '@reduxjs/toolkit';
import { locations, NameSpace } from '../../const';
import { City, Offer, Review } from '../../types/offer';
import { fetchActiveOfferAction, fetchCommentsAction, fetchFavoriteOffersAction, fetchNearByOffersAction, fetchOffersAction } from '../api-actions';

export type OfferProcess = {
  city: City,
  offers: Offer[],
  selectedSortOption: string,
  activeOffer: Offer | undefined,
  favoriteOffers: Offer[],
  comments: Review[];
  nearByOffers: Offer[],
  isDataLoaded: boolean,
}

const initialState: OfferProcess = {
  city: locations.Paris,
  offers: [],
  selectedSortOption: 'Popular',
  activeOffer: undefined,
  favoriteOffers: [],
  comments: [],
  nearByOffers: [],
  isDataLoaded: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    getCity: (state, action) => {
      state.city = action.payload.city;
    },
    changeSortOption: (state, action) => {
      state.selectedSortOption = action.payload.sortOption;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
      });
  },
});

export const {getCity, changeSortOption} = offerProcess.actions;
