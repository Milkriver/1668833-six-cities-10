import { locations } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City, Offer } from '../types/offer';
import { getCity, changeSortOption, loadOffers, requireAuthorization, setDataLoadedStatus, loadActiveOffer } from './action';

type InitalState = {
  city: City,
  offers: Offer[],
  selectedSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  offer: Offer,
}

const initialState: InitalState = {
  city: locations.Paris,
  offers: [],
  selectedSortOption: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  offer: {
    city: {
      name: '',
      location: { latitude: 0, longitude: 0, zoom: 0 }
    },
    previewImage: '',
    images: [],
    title: '',
    isFavorite: false,
    isPremium: false,
    rating: 0,
    type: '',
    bedrooms: 0,
    maxAdults: 0,
    price: 0,
    goods: [],
    host: { id: 0, name: '', isPro: true, avatarUrl: '' },
    description: '',
    location: { latitude: 0, longitude: 0, zoom: 0, },
    id: 1
  }
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
      state.offer = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
