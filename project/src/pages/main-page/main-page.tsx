import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import SortType from '../../components/sort-type/sort-type';
import { CITY } from '../../mock/offers';
import { Offer } from '../../types/offer';

type Props = {
  offers: Offer[];
  offerHoverHandler: (id: number | undefined) => void;
  selectedOffer: Offer | undefined;
};

function MainPage({ offers, offerHoverHandler, selectedOffer }: Props): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList activeCity = 'Amsterdam'/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortType />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers} offerHoverHandler={offerHoverHandler} className='cities__' />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={CITY} offers={offers} selectedOffer={selectedOffer} className='cities__' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
