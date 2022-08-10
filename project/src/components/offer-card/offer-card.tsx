import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { useNavigate } from 'react-router-dom';

type Props = {
  offer: Offer;
  activeCardId: number | undefined,
  onMouseEnter: (id: number | undefined) => void;
  onMouseLeave: () => void;
  className: string;
}
function OfferCard({ offer, onMouseLeave, activeCardId, onMouseEnter, className }: Props): JSX.Element {
  const navigate = useNavigate();
  const handleArticleClick = () => {
    if (activeCardId === undefined) {
      return;
    }
    navigate(AppRoute.Room);
  };
  const handleMouseEnter = () => {
    onMouseEnter(offer.id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <article className={`${className}card place-card`} onClick={handleArticleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${className}image-wrapper place-card__image-wrapper`}>
        <link href="#" />
        <img className="place-card__image" src={offer.images[0]} width='260' height='200' alt="PlaceImage" />
      </div>
      <div className={`${className}card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{(offer.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80 %' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <link href="#" />{offer.title}
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}


export default OfferCard;
