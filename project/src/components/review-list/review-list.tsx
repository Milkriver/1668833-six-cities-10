import { Review } from '../../types/offer';
import ReviewItem from '../review-item/review-item';

type Props = {
  reviews: Review[];
};

function ReviewList({ reviews }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewItem review={review} key={review.name} />
        ))
      }
    </ul>
  );
}

export default ReviewList;
