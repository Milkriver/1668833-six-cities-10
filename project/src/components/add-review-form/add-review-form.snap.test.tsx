import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddReviewForm from './add-review-form';

const activeOfferId = 1;
const mockStore = configureMockStore();
describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {

    const store = mockStore({});
    const { container } = render(
      <Provider store={store}>
        <AddReviewForm activeOfferId={activeOfferId} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
