import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import OfferListContainer from '../../components/offer-list-container/offer-list-container';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const { city } = useAppSelector((state) => state);
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
          <OfferListContainer/>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
