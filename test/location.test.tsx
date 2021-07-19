import { Location } from '../src/components';
import { render } from './testUtils';

describe('Location', () => {
  test('renders with location', () => {
    const { asFragment } = render(
      <Location
        location={{
          __typename: 'Location',
          id: 'abc123',
          city: 'Austin',
          country: 'United States',
          createdAt: '201231354',
          name: 'Waste Disposal Center',
          state: 'Texas',
          street: '123 Waste Disposal Street',
          updatedAt: '201231354',
          zipCode: 74725,
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
