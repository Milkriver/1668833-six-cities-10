import { City, Offer } from './types/offer';

export const sortCityOffers = (offers: Offer[], city: string) => (
  offers.filter((offer) => offer.city.name === city)
);

export const changeCity = (locations: City[], city: string) => (
  locations.find((location) => location.name === city)
);
