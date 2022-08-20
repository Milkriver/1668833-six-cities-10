import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { City, Offer, Review } from '../types/offer';
import { UserData } from '../types/user-data';


export const getCity = createAction<{city: City}>('offers/getCity');
export const changeSortOption = createAction<{sortOption: string}>('offers/changeSortOption');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadComments = createAction<Review[]>('offers/loadComments');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const redirectToRoute = createAction<AppRoute>('offers/redirectToRoute');
export const loadActiveOffer = createAction<Offer>('data/loadActiveOffer');
export const loadFavoriteOffers = createAction<Offer[]>('offers/loadFavoriteOffers');
export const loadNearByOffers = createAction<Offer[]>('offers/loadNearByOffers');
export const getUserData = createAction<UserData | null>('user/loadUserData');
