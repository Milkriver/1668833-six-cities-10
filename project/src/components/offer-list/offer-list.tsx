import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
  offerStatus: string;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, offerStatus } = props;
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          offerStatus={offerStatus}
          key={offer.id}
        />
      ))}
    </>
  );
}

export default OfferList;
