import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import OfferCard from './offer-card';
import { AuthorizationStatus } from '../../const';
import { mockOffers } from '../../test-mock/offers';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';


describe('Component: OfferCard e2e', () => {
  it('should handle mouse-manipulating correctly', async () => {
    const history = createMemoryHistory();
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      DATA: {
        favoriteOffers: [],
      }
    });
    const offer = mockOffers[0];
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const className = 'cities__';
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferCard offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className} />
        </HistoryRouter>
      </Provider>
    );

    const user = userEvent.setup();
    await user.hover(screen.getByText(offer.title));
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toBeCalledWith(offer.id);

    expect(onMouseLeave).toHaveBeenCalledTimes(0);
    await user.unhover(screen.getByTestId('offer-card__box'));
    await user.click(screen.getByTestId('offer-card__favorite'));
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
