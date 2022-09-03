import {render} from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const {container} = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
