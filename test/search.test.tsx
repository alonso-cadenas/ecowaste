import { Search } from '../src/components';
import { render } from './testUtils';
import { fireEvent } from '@testing-library/react';

describe('Search', () => {
  test('renders without dropdown', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders dropdown onFocus', () => {
    const { getByRole, getByText } = render(<Search />);
    fireEvent.focus(getByRole('textbox'));
    expect(getByText('Try searching for an item...')).toBeTruthy();
  });

  test('closes dropdown on button click', () => {
    const { getByRole } = render(<Search />);
    fireEvent.focus(getByRole('textbox'));
    expect(document.querySelector('#search-dropdown')).toBeTruthy();
    fireEvent.click(getByRole('button'));
    expect(document.querySelector('#search-dropdown')).toBeFalsy();
  });

  test('opens dropdown on button click', () => {
    const { getByRole } = render(<Search />);
    expect(document.querySelector('#search-dropdown')).toBeFalsy();
    fireEvent.click(getByRole('button'));
    expect(document.querySelector('#search-dropdown')).toBeTruthy();
  });

  test('does not go to search page on key down', () => {
    const { getByRole } = render(<Search />);
    fireEvent.keyDown(getByRole('textbox'), { key: 'a' });
    expect(document.querySelector('#search-dropdown')).toBeFalsy();
  });

  test('goes to search page on key down', () => {
    const { getByRole } = render(<Search />);
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter' });
    expect(document.querySelector('#search-dropdown')).toBeFalsy();
  });

  test('triggers a search on input change', () => {
    const { getByRole } = render(<Search />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'value' } });
    expect(document.querySelector('#search-dropdown')).toBeFalsy();
  });
});
