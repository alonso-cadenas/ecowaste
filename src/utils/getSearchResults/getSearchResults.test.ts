import { getSearchResults } from './getSearchResults';
import { API } from 'aws-amplify';

describe('getSearchResults', () => {
  it('should do nothing if passed an empty string', async () => {
    const searchQuery = '';
    const expected = [];
    const actual = await getSearchResults(searchQuery);
    expect(actual).toEqual(expected);
  });

  it('should search for items', async () => {
    const expected = [{ id: 123, name: 'test' }];
    API.graphql = jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: { searchItems: { items: expected } },
      })
    );
    const searchQuery = 'ba';
    const actual = await getSearchResults(searchQuery);
    expect(actual).toEqual(expected);
  });
});
