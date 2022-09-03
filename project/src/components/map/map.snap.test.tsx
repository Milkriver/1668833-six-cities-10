import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { locations } from '../../const';
import { mockOffers } from '../../test-mock/offers';
import Map from './map';

const activeCity = locations.Paris;
const offers = mockOffers;
const selectedOffer = mockOffers[0];

const mockStore = configureMockStore();
describe('Component: LocationList', () => {
  it('should render correctly', () => {
    const store = mockStore({});
    const { container } = render(
      <Provider store={store}>
        <Map city={activeCity} offers={offers} selectedOffer={selectedOffer} className='cities__' />
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
