import { render } from '@testing-library/react';
import LocationItem from './location-item';

const location = 'Paris';
const activeCity = 'Paris';
const onClick = (changedCity: string) => changedCity;

describe('Component: LocationItem', () => {
  it('should render correctly', () => {
    const { container } = render(<LocationItem location={location} activeCity={activeCity} onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });
});


