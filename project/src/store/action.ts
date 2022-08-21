import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { City, Offer, ReviewRequest, ReviewResponse } from '../types/offer';
import { UserData } from '../types/user-data';


export const getCity = createAction<{city: City}>('offers/getCity');
export const changeSortOption = createAction<{sortOption: string}>('offers/changeSortOption');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const loadActiveOffer = createAction<Offer>('offers/loadActiveOffer');
export const loadFavoriteOffers = createAction<Offer[]>('offers/loadFavoriteOffers');
export const loadNearByOffers = createAction<Offer[]>('offers/loadNearByOffers');
export const setNewComment = createAction<ReviewRequest>('offers/setNewComment');
export const loadComments = createAction<ReviewResponse[]>('offers/loadComments');
export const getUserData = createAction<UserData | null>('user/loadUserData');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');


