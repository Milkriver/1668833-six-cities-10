// import ReviewItem from '../review-item/review-item';

type Props = {
  offerId: number;
  };

function ReviewList({ offerId }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        // reviews.map((review) => (
        //   <ReviewItem review={review} key={review.id} />
        // ))
      }
    </ul>
  );
}

export default ReviewList;
