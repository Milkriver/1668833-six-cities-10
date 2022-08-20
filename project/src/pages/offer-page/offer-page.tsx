import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import Map from '../../components/map/map';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferList from '../../components/offer-list/offer-list';
import ReviewList from '../../components/review-list/review-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveOfferAction, fetchCommentsAction, fetchNearByOffersAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const activeOffer = useAppSelector((state) => state.activeOffer);
  const comments = useAppSelector((state) => state.comments);
  const nearByOffers = useAppSelector((state) => state.nearByOffers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const offerHoverHandler = (offerId: number | undefined) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

  useEffect(() => {
    if (activeOffer === undefined) {
      return;
    }
    dispatch(fetchCommentsAction(activeOffer.id));
    dispatch(fetchNearByOffersAction(activeOffer.id));
  }, [activeOffer, dispatch]);

  if (isNaN(Number(id))) {
    return <NotFoundScreen />;
  }

  if (activeOffer === undefined) {
    dispatch(fetchActiveOfferAction(Number(id)));
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                activeOffer.images.map((src) => (<div className="property__image-wrapper" key={Math.random()}> <img className="property__image" src={src} alt="PhotoStudio" /> </div>))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {activeOffer.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">{activeOffer.title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{(activeOffer.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80 %' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{activeOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{activeOffer.type}</li>
                <li className="property__feature property__feature--bedrooms">{activeOffer.bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {activeOffer.maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    activeOffer.goods.map((option) => (<li className="property__inside-item" key={option}>{option}</li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={activeOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {activeOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {activeOffer.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{activeOffer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList comments={comments} />
                <AddReviewForm />
              </section>
            </div>
          </div>
          <Map city={activeOffer.city} offers={nearByOffers} selectedOffer={selectedOffer} className='property__' />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearByOffers} offerHoverHandler={offerHoverHandler} className='near-places__' />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
