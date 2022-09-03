import { render } from '@testing-library/react';
import ReviewItem from './review-item';
import { mockReviews } from '../../test-mock/reviews';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const { container } = render(<ReviewItem review={mockReviews[0]} />);
    expect(container).toMatchSnapshot();
  });
});
