import { NameSpace } from '../../const';
import { City, Offer, Review } from '../../types/offer';
import { State } from '../../types/state';

export const getSelectedCity = (state: State): City => state[NameSpace.Data].city;
export const getSortOption = (state: State): string => state[NameSpace.Data].selectedSortOption;
export const loadOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const loadActiveOffer = (state: State): Offer | undefined => state[NameSpace.Data].activeOffer;
export const loadComments = (state: State): Review[] => state[NameSpace.Data].comments;
export const loadNearByOffers = (state: State): Offer[] => state[NameSpace.Data].nearByOffers;
export const loadFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
