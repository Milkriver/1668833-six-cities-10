import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import OfferCard from './offer-card';
import { AuthorizationStatus } from '../../const';
import { mockOffers } from '../../test-mock/offers';

const mockStore = configureMockStore();

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    });

    const offer = mockOffers[0];
    const onMouseEnter = () => [];
    const onMouseLeave = () => [];
    const className = 'cities__';
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferCard offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className} />
        </HistoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
