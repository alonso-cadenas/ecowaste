/**
 * @jest-environment jsdom
 */
import { goToSearchPage } from './goToSearchPage';

describe('goToSearchPage', () => {
  const oldLocation = window.location;

  beforeAll(() => {
    const assign = jest.fn();
    delete window.location;
    window.location = {
      ...oldLocation,
      assign,
    };
  });

  afterAll(() => {
    window.location = oldLocation;
  });

  it('should do nothing if passed an empty string', () => {
    const searchQuery = '';
    const expected = 0;
    goToSearchPage(searchQuery);
    expect(location.assign).toHaveBeenCalledTimes(expected);
  });

  it('should call window.location.assign with a valid string', () => {
    const searchQuery = 'hello';
    const expected = `/search/${encodeURIComponent(searchQuery)}`;
    goToSearchPage(searchQuery);
    expect(location.assign).toHaveBeenCalledWith(expected);
  });
});
