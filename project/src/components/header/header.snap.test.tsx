import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../const';
import Header from './header';

const mockStore = configureMockStore();

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: 'ma@ya.ru',
      },
      DATA: {
        favoriteOffers: [],
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByText('ma@ya.ru');
    expect(headerElement).toBeInTheDocument();
  });
});
