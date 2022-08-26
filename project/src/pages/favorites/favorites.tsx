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
      <main className={`page__main page__main--favorites ${(favoriteOffers.length > 0) ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${(favoriteOffers.length > 0) ? '' : 'favorites--empty'}`}>
            {(favoriteOffers.length > 0) ?
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteCities.map((city) => (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <div className="locations__item-link">
                            <span>{city}</span>
                          </div>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OfferList offers={favoriteOffers.filter((offer) => offer.city.name === city)} className='favorites__' />
                      </div>
                    </li>
                  ))}
                </ul>
              </>
              :
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </>}
          </section>
        </div>
      </main >
      <Footer />
    </div >
  );
}

export default Favorites;
