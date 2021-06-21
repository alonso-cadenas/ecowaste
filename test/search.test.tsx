import { Search } from '../src/components';
import { render } from './testUtils';

describe('Search', () => {
  test('renders without dropdown', () => {
    const { asFragment } = render(<Search />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
