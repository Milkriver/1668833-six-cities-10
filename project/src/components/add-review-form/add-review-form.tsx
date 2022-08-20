import React, { useState } from 'react';

const ratingStars = [
  { title: 'perfect', id: 5, },
  { title: 'good', id: 4, },
  { title: 'not bad', id: 3, },
  { title: 'badly', id: 2, },
  { title: 'terribly', id: 1, },
];

function AddReviewForm(): JSX.Element {
  const [, setReview] = useState<string | undefined>();
  const [, setRating] = useState<string | undefined>();
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.currentTarget.value);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.currentTarget.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
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
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default AddReviewForm;
