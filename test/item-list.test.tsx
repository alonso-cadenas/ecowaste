import { ItemList } from '../src/components';
import { render } from './testUtils';

describe('ItemList', () => {
  test('renders without items', () => {
    const { asFragment } = render(<ItemList items={[]} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with items', () => {
    const { asFragment } = render(
      <ItemList items={['metal spoon', 'plastic spoon', 'wooden spoon']} />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
