import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offer[];
  offerStatus: string;
  offerHoverHandler: (offerName: string) => void;
};

function OfferList({ offers, offerStatus, offerHoverHandler }: Props): JSX.Element {
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
          onMouseEnter={offerHoverHandler}
        />
      ))}
    </>
  );
}

export default OfferList;

