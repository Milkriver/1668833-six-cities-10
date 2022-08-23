import { NameSpace } from '../../const';
import { City, Offer, Review } from '../../types/offer';
import { State } from '../../types/state';

export const selectCity = (state: State): City => state[NameSpace.Data].city;
export const selectSortOption = (state: State): string => state[NameSpace.Data].selectedSortOption;
export const selectOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const selectActiveOffer = (state: State): Offer | undefined => state[NameSpace.Data].activeOffer;
export const selectComments = (state: State): Review[] => state[NameSpace.Data].comments;
export const selectNearByOffers = (state: State): Offer[] => state[NameSpace.Data].nearByOffers;
export const selectFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const selectLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
