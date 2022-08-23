import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { selectFavoriteOffers } from '../../store/offer-process/selectors';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectFavoriteOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities: Set<string> = new Set();
  for (let index = 0; index < favoriteOffers.length; index++) {
    cities.add(favoriteOffers[index].city.name);
  }

  const favoriteCities: string[] = Array.from(cities);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              {favoriteCities.map((city) =>
                (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <OfferList offers={favoriteOffers.filter((offer) => offer.city.name === city)} className='favorites__' />
                    </div>
                  </li>
                ))}
            </ul>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
