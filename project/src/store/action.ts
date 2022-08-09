import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offer';


export const getCityAction = createAction<{city: City}>('offers/getCity');
export const changeSortOptionAction = createAction<{sortOption: string}>('offers/changeSortOption');
