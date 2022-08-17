import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortCityOffers } from '../../utils';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import SortOptionList from '../sort-option-list/sort-option-list';

function OfferListContainer(): JSX.Element {
  const { offers, city } = useAppSelector((state) => state);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };
  const cityOffers = sortCityOffers(offers, city.name);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
        <SortOptionList offers={cityOffers} />
        <div className="cities__places-list places__list tabs__content">
          <OfferList offers={cityOffers} offerHoverHandler={offerHoverHandler} className='cities__' />
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={city} offers={cityOffers} selectedOffer={selectedOffer} className='cities__' />
      </div>
    </div>
  );
}

export default OfferListContainer;
