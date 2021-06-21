import { getSearchResults } from './getSearchResults';

describe('getSearchResults', () => {
  it('should do nothing if passed an empty string', async () => {
    const searchQuery = '';
    const expected = [];
    const actual = await getSearchResults(searchQuery);
    expect(actual).toEqual(expected);
  });
});
