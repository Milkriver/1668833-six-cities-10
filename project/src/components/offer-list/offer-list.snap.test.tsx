import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../const';
import { mockOffers } from '../../test-mock/offers';
import OfferList from './offer-list';

const mockStore = configureMockStore();

describe('Component: OfferList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    });
    const offers = mockOffers;
    const offerHoverHandler = () => [];
    const className = 'cities__';
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferList offers={offers} offerHoverHandler={offerHoverHandler} className={className} />
        </HistoryRouter>
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
