import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';

function Favorites(): JSX.Element {
  const { offers } = useAppSelector((state) => state);
  const [, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OfferList offers={favoriteOffers} offerHoverHandler={offerHoverHandler} className='favorites__' />
                </div>
              </li>
            </ul>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
