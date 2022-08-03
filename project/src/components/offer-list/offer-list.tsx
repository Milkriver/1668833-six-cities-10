import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offer[];
  offerHoverHandler: (offerName: string) => void;
  className: string;
};

function OfferList({ offers, offerHoverHandler, className }: Props): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => {
    setActiveCardId(id);
  };
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          activeCardId={activeCardId}
          onMouseOver={handleActiveCard}
          onMouseEnter={offerHoverHandler}
          className={className}
        />
      ))}
    </>
  );
}

export default OfferList;

