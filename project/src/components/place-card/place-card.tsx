type PlaceCardProps = {
  id: number,
  name: string,
  type: string,
  premium: boolean,
  image: string,
  price: number,
  bookmark: boolean,
  rating: number,
};

function PlaceCard({ id, name, type, premium, image, price, bookmark, rating }: PlaceCardProps): JSX.Element {
  const renderPremiumLabel = (isCardPremium: boolean) => {
    if (isCardPremium) { return <div className="place-card__mark"><span>Premium</span></div>; }
    return '';
  };
  return (
    <article className="cities__card place-card">
      {renderPremiumLabel(premium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <link href="#" />
        <img className="place-card__image" src={image} width="260" height="200" alt="PlaceImage" />
      </div>
      <div className="place-card__info">
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


export default PlaceCard;
