import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { useNavigate } from 'react-router-dom';

type Props = {
  offer: Offer;
  offerStatus: string;
  onMouseOver: (id: number | undefined) => void;
  activeCardId: number | undefined,
  onMouseEnter: (offerName: string) => void;
}
function OfferCard({ offer, offerStatus, onMouseOver, activeCardId, onMouseEnter }: Props): JSX.Element {
  let renderCard;
  switch (offerStatus) {
    case 'MAIN':
      renderCard = 'cities__';
      break;
    case 'FAVORITES':
      renderCard = 'favorites__';
      break;
    case 'NEAR':
      renderCard = 'near-places__';
      break;
    default:
      throw new Error('Тип не определен');
  }
  const navigate = useNavigate();
  const handleArticleClick = () => {
    if (activeCardId === undefined) {
      return;
    }
    navigate(AppRoute.Room);
  };
  return (
    <article className={`${renderCard}card place-card`} onClick={handleArticleClick} onMouseEnter={() => {
      onMouseOver(offer.id);
      onMouseEnter(offer.name);
    }}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${renderCard}image-wrapper place-card__image-wrapper`}>
        <link href="#" />
        <img className="place-card__image" src={offer.image[0]} width='260' height='200' alt="PlaceImage" />
      </div>
      <div className={`${renderCard}card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{(offer.bookmark) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80 %' }} ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <link href="#" />{offer.name}
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article >
  );
}


export default OfferCard;
