import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { locations } from '../../const';
import LocationList from './location-list';

const activeCity = locations.Paris;
const mockStore = configureMockStore();
describe('Component: LocationList', () => {
  it('should render correctly', () => {
    const store = mockStore({});
    const { container } = render(<Provider store={store}><LocationList activeCity={activeCity} /></Provider>);
    expect(container).toMatchSnapshot();
  });
});

