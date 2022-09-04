import {render} from '@testing-library/react';
import OfferPage from './offer-page';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';


describe('Component: OfferPage', () => {
  test('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: 'ma@ya.ru',
      },
      DATA: {
        favoriteOffers: [],
      }
    });

    const history = createMemoryHistory();

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
