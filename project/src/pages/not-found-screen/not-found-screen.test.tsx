import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import NotFoundScreen from './not-found-screen';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userEmail: '',
      },
      DATA: {
        favoriteOffers: [],
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFoundScreen />
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByText('404. Page not found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
