import { AppRoute, AuthorizationStatus, FavoriteStatusActions } from '../../const';
import { Offer } from '../../types/offer';
import { generatePath, Link } from 'react-router-dom';
import { getRagingPercentage } from '../../utils/utils';
import { changeFavoriteOfferStatusAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';

type Props = {
  offer: Offer;
  onMouseEnter: (id: number | undefined) => void;
  onMouseLeave: () => void;
  className: string;
}
function OfferCard({ offer, onMouseLeave, onMouseEnter, className }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const handleMouseEnter = () => {
    onMouseEnter(offer.id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const handleClick = () => {
    dispatch(changeFavoriteOfferStatusAction({
      offerId: offer.id.toString(),
      FavoriteStatus: offer.isFavorite ? FavoriteStatusActions.REMOVE : FavoriteStatusActions.ADD,
    }));
  };
  const handleFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      handleClick();
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };
  return (
    <article className={`${className}card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-testid="offer-card__box">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${className}image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Room, { id: String(offer.id) })}>
          <img className="place-card__image" src={offer.previewImage} width='260' height='200' alt={`${offer.title}`} />
        </Link>
      </div>
      <div className={`${className}card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite && 'place-card__bookmark-button--active'}`} onClick={handleFavoriteStatus} type="button" data-testid="offer-card__favorite">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{(offer.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRagingPercentage(offer.rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: String(offer.id) })}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}


export default OfferCard;
