import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  offerStatus: string;
  offerHoverHandler: (offerName: string) => void;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, offerStatus, offerHoverHandler } = props;
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

