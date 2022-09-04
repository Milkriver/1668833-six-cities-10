import { mockOffers } from '../test-mock/offers';
import { sortOfferList } from './utils';
import { sortOptionList } from '../const';

describe('Utils test', () => {
  it('should sort by decliningPrice', () => {
    const offers = [...mockOffers];
    const prices = offers.map((x) => x.price);
    const maxPrice = Math.max.apply(null, prices);
    const minPrice = Math.min.apply(null, prices);

    const sortedOffers = sortOfferList(sortOptionList.decliningPrice, offers);

    expect(sortedOffers[0].price).toBe(maxPrice);
    expect(sortedOffers[offers.length - 1].price).toBe(minPrice);
  });

  it('should sort by risingPrice', () => {
    const offers = [...mockOffers];
    const prices = offers.map((x) => x.price);
    const maxPrice = Math.max.apply(null, prices);
    const minPrice = Math.min.apply(null, prices);

    const sortedOffers = sortOfferList(sortOptionList.risingPrice, offers);

    expect(sortedOffers[0].price).toBe(minPrice);
    expect(sortedOffers[offers.length - 1].price).toBe(maxPrice);
  });

  it('should sort by topRating', () => {
    const offers = [...mockOffers];
    const ratings = offers.map((x) => x.rating);
    const maxRating = Math.max.apply(null, ratings);
    const minRating = Math.min.apply(null, ratings);

    const sortedOffers = sortOfferList(sortOptionList.topRating, offers);

    expect(sortedOffers[0].rating).toBe(maxRating);
    expect(sortedOffers[offers.length - 1].rating).toBe(minRating);
  });
});
