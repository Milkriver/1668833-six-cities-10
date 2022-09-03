import { locations } from './../../const';
import { mockOffers } from '../../test-mock/offers';
import { mockReviews } from '../../test-mock/reviews';
import { changeSortOption, getCity, OfferProcess, offerProcess } from './offer-process';
import { fetchActiveOfferAction, fetchCommentsAction, fetchFavoriteOffersAction, fetchNearByOffersAction, fetchOffersAction } from '../api-actions';

describe('Reducer: offer', () => {
  let state: OfferProcess;
  beforeEach(() => {
    state = {
      city: locations.Paris,
      offers: [],
      selectedSortOption: 'Popular',
      activeOffer: undefined,
      favoriteOffers: [],
      comments: [],
      nearByOffers: [],
      isDataLoaded: false,
    };
  });
  const mockState = {
    city: locations.Brussels,
    selectedSortOption: 'Price: low to high',
    isDataLoaded: true,
  };

  it('should get city by a given value', () => {
    expect(offerProcess.reducer(state, getCity({ city: locations['Brussels'] })).city)
      .toEqual(mockState.city);
  });

  it('should get selectedSortOption by a given value', () => {
    expect(offerProcess.reducer(state, changeSortOption({ sortOption: 'Price: low to high' })).selectedSortOption)
      .toEqual(mockState.selectedSortOption);
  });

  it('should update isDataLoaded to "true" if fetchOffersAction pending', () => {
    expect(offerProcess.reducer(state, { type: fetchOffersAction.pending.type }).isDataLoaded)
      .toEqual(mockState.isDataLoaded);
  });

  it('should update isDataLoaded to "false" if fetchOffersAction fulfilled', () => {
    expect(offerProcess.reducer(state, { type: fetchOffersAction.fulfilled.type }).isDataLoaded)
      .toEqual(false);
  });
  it('should update nearByOffers if fetchNearByOffersAction fulfilled', () => {
    const nearByOffers = mockOffers;
    expect(offerProcess.reducer(state, { type: fetchNearByOffersAction.fulfilled.type, payload: nearByOffers }).nearByOffers)
      .toEqual(nearByOffers);
  });

  it('should update comments if fetchCommentsAction fulfilled', () => {
    const comments = mockReviews;
    expect(offerProcess.reducer(state, { type: fetchCommentsAction.fulfilled.type, payload: comments }).comments)
      .toEqual(comments);
  });

  it('should update active offer if fetchActiveOfferAction fulfilled', () => {
    const activeOffer = mockOffers[0];
    expect(offerProcess.reducer(state, { type: fetchActiveOfferAction.fulfilled.type, payload: activeOffer }).activeOffer)
      .toEqual(activeOffer);
  });

  it('should update favorite offers if fetchFavoriteOffersAction fulfilled', () => {
    const favoriteOffers = mockOffers;
    expect(offerProcess.reducer(state, { type: fetchFavoriteOffersAction.fulfilled.type, payload: favoriteOffers }).favoriteOffers)
      .toEqual(favoriteOffers);
  });

});

