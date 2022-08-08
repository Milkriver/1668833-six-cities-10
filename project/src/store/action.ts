import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offer';


export const changeCityAction = createAction<{city: City}>('offers/changeCity');
export const getCityOffersAction = createAction('offers/getCityOffers');
export const changeSortOptionAction = createAction<{sortOption: string}>('offers/changeSortOption');
