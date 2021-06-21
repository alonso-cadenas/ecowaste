import { Header } from '../src/components';
import { render } from './testUtils';

describe('Header', () => {
  test('renders with sign in', () => {
    const { asFragment } = render(<Header />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders without sign in', () => {
    const { asFragment } = render(<Header showSignIn={false} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
