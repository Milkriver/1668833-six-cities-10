import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus, locations } from '../../const';
import App from './app';
import HistoryRouter from '../history-router/history-router';
import { mockOffers } from '../../test-mock/offers';
import { mockReviews } from '../../test-mock/reviews';

const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: {
    isDataLoaded: false,
    favoriteOffers: mockOffers,
    offers: mockOffers,
    activeOffer: mockOffers[0],
    city: locations.Paris,
    selectedSortOption: 'Popular',
    comments: mockReviews,
    nearByOffers: mockOffers,
  },
});
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getAllByText(/Paris/i)).toHaveLength(2);
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
