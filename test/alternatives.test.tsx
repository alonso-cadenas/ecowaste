import { Alternatives } from '../src/components';
import { render } from './testUtils';

describe('Alternatives', () => {
  test('renders without alternatives', () => {
    const { asFragment } = render(<Alternatives alternatives={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with alternatives', () => {
    const { asFragment } = render(
      <Alternatives
        alternatives={['metal spoon', 'plastic spoon', 'wooden spoon']}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
