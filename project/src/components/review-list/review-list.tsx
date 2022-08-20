import ReviewItem from '../review-item/review-item';

import { ReviewResponse } from '../../types/offer';

type Props = {
  comments: ReviewResponse[];
  };

function ReviewList({ comments }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => (
          <ReviewItem review={comment} key={comment.id} />
        ))
      }
    </ul>
  );
}

export default ReviewList;
