import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import { CardStatus } from '../../const';
import { Offer } from '../../types/offer';

type OfferPageProps = {
  offer: Offer;
  offers: Offer[];
};

function OfferPage(props: OfferPageProps): JSX.Element {
  const { offer, offers } = props;
  const { bedrooms, bookmark, description, guests, host, image, name, options, premium, price, rating, reviews, type } = offer;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                image.map((src) => (<div className="property__image-wrapper" key={src}> <img className="property__image" src={src} alt="PhotoStudio" /> </div>))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium && (<div className="place-card__mark"><span>Premium</span></div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">{name}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{(bookmark) ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80 %' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {guests} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    options.map((option) => (<li className="property__inside-item" key={option}>{option}</li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.image} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.status}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">

                  {
                    reviews.map((review) => (
                      <li className="reviews__item" key={review.name}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">{review.name}</span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{ width: '80 %' }}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">{review.text}</p>
                          <time className="reviews__time" dateTime={review.date}>{review.date}</time>
                        </div>
                      </li>

                    ))
                  }
                </ul>
                <AddReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={offers} offerStatus={CardStatus.NearPlace}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
