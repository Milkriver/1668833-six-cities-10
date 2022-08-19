import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchActiveOfferAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offer[];
  offerHoverHandler?: (id: number | undefined) => void;
  className: string;
};

function OfferList({ offers, offerHoverHandler, className }: Props): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>();
  const dispatch = useAppDispatch();
  const handleOfferCardMouseEnter = (id: number | undefined) => {
    setActiveCardId(id);
    if (offerHoverHandler !== undefined) {
      offerHoverHandler(id);
    }
    if (id !== undefined) {
      dispatch(fetchActiveOfferAction(id));
    }
  };
  const handleOfferCardMouseLeave = () => {
    setActiveCardId(undefined);
  };
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          activeCardId={activeCardId}
          onMouseEnter={handleOfferCardMouseEnter}
          onMouseLeave={handleOfferCardMouseLeave}
          className={className}
        />
      ))}
    </>
  );
}

export default OfferList;

