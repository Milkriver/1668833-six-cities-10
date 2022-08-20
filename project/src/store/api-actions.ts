import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadOffers, redirectToRoute, requireAuthorization, setDataLoadedStatus, loadComments, loadActiveOffer, loadFavoriteOffers, loadNearByOffers, getUserData, setNewComment } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer, ReviewRequest, ReviewResponse } from '../types/offer.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/fetchHotels',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewResponse[]>(`${APIRoute.Comments}/${offerId}`);

    dispatch(loadComments(data));
  },
);

export const fetchNearByOffersAction = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/fetchNearByOffers',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Hotels}/${offerId}/nearby`);
    dispatch(loadNearByOffers(data));
  },
);

export const fetchActiveOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchActiveOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Hotels}/${offerId}`);
      dispatch(loadActiveOffer(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.PageError));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(getUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Favorites));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorites);
    dispatch(loadFavoriteOffers(data));
  },
);

export const addNewCommentAction = createAsyncThunk<void, ReviewRequest, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/addNewComment',
  async ({ offerId, review }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewRequest>(`${APIRoute.Comments}/${offerId}`, review);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(setNewComment(data));
  },
);
