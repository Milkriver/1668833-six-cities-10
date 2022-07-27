import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { useNavigate } from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  offerStatus: string;
  onMouseOver: (id: number | undefined) => void;
  activeCardId: number | undefined
}
const renderTypes = {
  main: {
    cardType: 'cities__card',
    imageType: 'cities__image-wrapper',
    cardInfo: '',
    imageWidth: '260',
    imageHeight: '200',
  },
  favorite: {
    cardType: 'favorites__card',
    imageType: 'favorites__image-wrapper',
    cardInfo: '',
    imageWidth: '150',
    imageHeight: '110',
  },
  near: {
    cardType: 'near-places__card',
    imageType: 'near-places__image-wrapper',
    cardInfo: 'favorites__card-info',
    imageWidth: '260',
    imageHeight: '200',
  },
};
function OfferCard(props: OfferCardProps): JSX.Element {
  const { offer, offerStatus, onMouseOver, activeCardId } = props;
  const { name, type, premium, price, image, bookmark, id } = offer;
  let renderCard;
  switch (offerStatus) {
    case 'MAIN':
      renderCard = renderTypes.main;
      break;
    case 'FAVORITES':
      renderCard = renderTypes.favorite;
      break;
    case 'NEAR':
      renderCard = renderTypes.near;
      break;
    default:
      throw new Error('Тип не определен');
  }
  const navigate = useNavigate();
  const onClick = () => {
    if (activeCardId === undefined) {
      return;
    }
    navigate(AppRoute.Room);
  };
  return (
    <article className={`${renderCard.cardType} place-card`} onClick={onClick} onMouseEnter={() => onMouseOver(id)}>
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${renderCard.imageType} place-card__image-wrapper`}>
        <link href="#" />
        <img className="place-card__image" src={image[0]} width={renderCard.imageWidth} height={renderCard.imageHeight} alt="PlaceImage" />
      </div>
      <div className={`${renderCard.cardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{(bookmark) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80 %' }} ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <link href="#" />{name}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}


export default OfferCard;
