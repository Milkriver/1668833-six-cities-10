import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { loadActiveOffer, loadFavoriteOffers, loadNearByOffers, loadOffers, redirectToRoute, requireAuthorization, setDataLoadedStatus, loadComments } from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Offer, Review } from '../types/offer.js';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'data/loadHotels',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/loadFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Favorites);
    dispatch(loadFavoriteOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchNearByOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/loadNearByOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${offerId}/nearby`);
    dispatch(loadNearByOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}
>(
  'offers/loadComments',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchActiveOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadActiveOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${offerId}`);
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
  async (_arg, {dispatch, extra: api}) => {
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
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
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
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
