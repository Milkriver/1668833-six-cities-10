import { sortOptionList } from './const';
import { Offer } from './types/offer';

export const sortCityOffers = (offers: Offer[], city: string) => (
  offers.filter((offer) => offer.city.name === city)
);

export const sortOfferList = (selectedSortOption: string, offers: Offer[]) => {
  switch (selectedSortOption) {
    case sortOptionList.risingPrice:
      return offers.sort((offer1, offer2) => offer1.price - offer2.price);
    case sortOptionList.decliningPrice:
      return offers.sort((offer1, offer2) => offer2.price - offer1.price);
    case sortOptionList.topRating:
      return offers.sort((offer1, offer2) => offer2.rating - offer1.rating);
    default:
      return offers;
  }
};
