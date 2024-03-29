import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addNewCommentAction, fetchCommentsAction } from '../../store/api-actions';
import { ReviewRequest } from '../../types/offer';

type Props = {
  activeOfferId: number;
};

const ratingStars = [
  { title: 'perfect', id: 5, },
  { title: 'good', id: 4, },
  { title: 'not bad', id: 3, },
  { title: 'badly', id: 2, },
  { title: 'terribly', id: 1, },
];

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function AddReviewForm({ activeOfferId }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [statusSubmit, setStatusSubmit] = useState(false);
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };
  const onSubmit = ({ review, offerId }: ReviewRequest) => {
    dispatch(addNewCommentAction({ review, offerId }));
    dispatch(fetchCommentsAction(offerId));
    setStatusSubmit(false);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setStatusSubmit(true);
    if (comment !== null && rating !== null) {
      onSubmit({
        review: {
          comment: comment,
          rating: Number(rating),
        },
        offerId: activeOfferId
      });
      setComment('');
      setRating(undefined);
    }
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => (
          <React.Fragment key={star.id}>
            < input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.id}
              id={`${star.id}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === star.id}
            />
            <label
              htmlFor={`${star.id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}
        value={comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span>
          and describe your stay with at least
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!rating || comment.length <= MIN_COMMENT_LENGTH || comment.length > MAX_COMMENT_LENGTH || statusSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddReviewForm;
