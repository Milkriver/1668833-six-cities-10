import ReviewItem from '../review-item/review-item';

import { Review } from '../../types/offer';
import dayjs from 'dayjs';

type Props = {
  comments: Review[];
};
const MAX_REVIEWS_ON_PAGE = 10;
function ReviewList({ comments }: Props): JSX.Element {
  const sortedComments = [...comments].sort((comment1, comment2) => dayjs(comment1.date).diff(dayjs(comment2.date))).slice(0, (MAX_REVIEWS_ON_PAGE - 1));
  return (
    <ul className="reviews__list">
      {
        sortedComments.map((comment) => (
          <ReviewItem review={comment} key={comment.id} />
        ))
      }
    </ul>
  );
}

export default ReviewList;
