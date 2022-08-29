import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { ReviewRequest } from '../types/offer';

export const setNewComment = createAction<ReviewRequest>('offers/setNewComment');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');


