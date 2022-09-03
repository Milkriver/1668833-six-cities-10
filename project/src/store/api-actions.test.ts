import { FavoriteStatusActions } from './../const';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { addNewCommentAction, changeFavoriteOfferStatusAction, checkAuthAction, fetchActiveOfferAction, fetchCommentsAction, fetchFavoriteOffersAction, fetchNearByOffersAction, fetchOffersAction, loginAction, logoutAction } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { redirectToRoute, setNewComment } from './action';
import { mockOffers } from '../test-mock/offers';
import { mockReviews } from '../test-mock/reviews';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });
    const store = mockStore();
    Storage.prototype.setItem = jest.fn();
    await store.dispatch(loginAction(fakeUser));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch loading offers when GET /hotels', async () => {
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchOffersAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch load comments when GET /comments/id', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Comments}/${mockId}`).reply(200, mockReviews);
    const store = mockStore();
    await store.dispatch(fetchCommentsAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchCommentsAction.pending.type,
      fetchCommentsAction.fulfilled.type
    ]);
  });

  it('should dispatch near by offers when GET /id/nearby', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Hotels}/${mockId}/nearby`).reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchNearByOffersAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchNearByOffersAction.pending.type,
      fetchNearByOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch active offer when GET /id', async () => {
    const mockId = 1;
    mockAPI.onGet(`${APIRoute.Hotels}/${mockId}`).reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchActiveOfferAction(mockId));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchActiveOfferAction.pending.type,
      fetchActiveOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch favorite offers when GET /favorite', async () => {
    mockAPI.onGet(APIRoute.Favorites).reply(200, mockOffers);
    const store = mockStore();
    await store.dispatch(fetchFavoriteOffersAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();
    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch addNewCommentAction when POST /comments/{id}', async () => {
    mockAPI
      .onPost(`${APIRoute.Comments}/2`)
      .reply(200);

    const store = mockStore();
    const mockReview = { offerId: 2, review: { comment: 'test', rating: 5 } };
    await store.dispatch(addNewCommentAction(mockReview));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      addNewCommentAction.pending.type,
      setNewComment.type,
      addNewCommentAction.fulfilled.type,
    ]);
  });


  it('should dispatch changeFavoriteOfferStatusAction when POST /comments/{id}', async () => {
    mockAPI
      .onPost(`${APIRoute.Favorites}/2/1`)
      .reply(200);

    const store = mockStore();

    await store.dispatch(changeFavoriteOfferStatusAction({ offerId: '2', FavoriteStatus: FavoriteStatusActions.ADD }));
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      changeFavoriteOfferStatusAction.pending.type,
      fetchFavoriteOffersAction.pending.type,
      fetchOffersAction.pending.type,
      changeFavoriteOfferStatusAction.fulfilled.type,
    ]);
  });

});
