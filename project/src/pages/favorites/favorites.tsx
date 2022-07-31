import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import { CardStatus } from '../../const';
import { Offer } from '../../types/offer';

type FavoritesProps = {
  offers: Offer[];
  offerHoverHandler: (offerName: string) => void;
};

function Favorites(props: FavoritesProps): JSX.Element {
  const { offers, offerHoverHandler } = props;
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
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OfferList offers={offers} offerStatus={CardStatus.Favorites} offerHoverHandler={offerHoverHandler}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OfferList offers={offers} offerStatus={CardStatus.Favorites} offerHoverHandler={offerHoverHandler}/>
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
