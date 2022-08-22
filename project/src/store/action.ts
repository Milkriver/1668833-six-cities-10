import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { ReviewRequest } from '../types/offer';
import { UserData } from '../types/user-data';

export const setNewComment = createAction<ReviewRequest>('offers/setNewComment');
export const getUserData = createAction<UserData | null>('user/getUserData');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');


