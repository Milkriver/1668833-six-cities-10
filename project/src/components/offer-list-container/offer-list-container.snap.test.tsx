import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus, locations } from '../../const';
import OfferListContainer from './offer-list-container';
import { mockOffers } from '../../test-mock/offers';


const mockStore = configureMockStore();
describe('Component: OfferListContainer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      DATA: {
        offers: mockOffers,
        city: locations.Paris
      }

    });
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferListContainer />
        </HistoryRouter>
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
