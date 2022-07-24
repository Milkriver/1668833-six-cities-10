import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers } = props;
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          id={offer.id}
          name={offer.name}
          type={offer.type}
          premium={offer.premium}
          image={offer.image}
          price={offer.price}
          bookmark={offer.bookmark}
          rating={offer.rating}
          bedrooms={offer.bedrooms}
          guests={offer.guests}
          options={offer.options}
          host={offer.host}
          reviews={offer.reviews}
          description={offer.description}
          key={offer.id}
        />
      ))}
    </>
  );
}

export default OfferList;
