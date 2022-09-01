import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import SortOptionList from './sort-option-list';
import { mockOffers } from '../../test-mock/offers';
import { sortCityOffers } from '../../utils';

const mockStore = configureMockStore();

describe('Component: SortOptionList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        selectedSortOption: 'Popular'
      }
    });
    const cityOffers = sortCityOffers(mockOffers, mockOffers[0].city.name);
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortOptionList offers={cityOffers} />
        </HistoryRouter>
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
