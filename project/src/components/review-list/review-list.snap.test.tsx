import { render } from '@testing-library/react';
import { mockReviews } from '../../test-mock/reviews';
import ReviewList from './review-list';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const { container } = render(<ReviewList comments={mockReviews} />);
    expect(container).toMatchSnapshot();
  });
});
