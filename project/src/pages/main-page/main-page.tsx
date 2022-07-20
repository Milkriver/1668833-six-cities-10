import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';
import PlaceCard from '../../components/place-card/place-card';
import SortType from '../../components/sort-type/sort-type';
import { SingleFlat } from '../../types/single-flat';

const locations = ['Paris', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];

type TypeProps = {
  flats: SingleFlat[]
};

function MainPage(props: TypeProps): JSX.Element {
  const { flats } = props;
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              {locations.map((location) => <LocationItem key={location} location={location} />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortType />
              <div className="cities__places-list places__list tabs__content">
                {flats.map((flat) => <PlaceCard id={flat.id} name={flat.name} type={flat.type} premium={flat.premium} image={flat.image} price={flat.price} bookmark={flat.bookmark} rating={flat.rating} key={flat.id}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
