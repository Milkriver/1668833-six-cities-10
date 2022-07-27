import { useState } from 'react';
import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
  offerStatus: string;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, offerStatus } = props;
  const [activeCardId, setActiveCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => {
    setActiveCardId(id);
  };
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          offerStatus={offerStatus}
          key={offer.id}
          activeCardId={activeCardId}
          onMouseOver={handleActiveCard}
        />
      ))}
    </>
  );
}

export default OfferList;

