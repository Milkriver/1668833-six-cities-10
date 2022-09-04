import {render} from '@testing-library/react';
import LoginPage from './login-page';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-router/history-router';
import { mockOffers } from '../../test-mock/offers';


describe('Component: LoginPage', () => {
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
        city: mockOffers[0].city,
        offers: mockOffers
      }
    });

    const history = createMemoryHistory();

    jest.spyOn(Math, 'random').mockReturnValue(0);

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
