import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { selectCity, selectOffers } from '../../store/offer-process/selectors';
import { Offer } from '../../types/offer';
import { sortCityOffers } from '../../utils/utils';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import SortOptionList from '../sort-option-list/sort-option-list';

function OfferListContainer(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const city = useAppSelector(selectCity);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };
  const cityOffers = sortCityOffers(offers, city.name);
  return (
    <div className="cities__places-container container">

      {(cityOffers.length > 0)
        ?
        <>
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
        </>
        :
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
            </div>
          </section>
          <div className="cities__right-section"><section className="cities__map map"></section></div>
        </div>}
    </div>
  );
}

export default OfferListContainer;
