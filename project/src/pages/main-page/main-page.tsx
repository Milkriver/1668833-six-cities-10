import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import SortType from '../../components/sort-type/sort-type';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortCityOffers } from '../../utils';

type Props = {
  offerHoverHandler: (id: number | undefined) => void;
  selectedOffer: Offer | undefined;
};

function MainPage({ offerHoverHandler, selectedOffer }: Props): JSX.Element {
  const { offers, city } = useAppSelector((state) => state);
  const cityOffers = sortCityOffers(offers, city.name);
  const offersQuantity = cityOffers.length;
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList activeCity={city} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersQuantity} places to stay in {city.name}</b>
              <SortType />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={cityOffers} offerHoverHandler={offerHoverHandler} className='cities__' />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={city} offers={cityOffers} selectedOffer={selectedOffer} className='cities__' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
