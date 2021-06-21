import { getMessage } from './getMessage';

describe('getMessage', () => {
  it('should return searching message', () => {
    const message = getMessage(true, 0);
    expect(message).toEqual('Searching...');
  });

  it('should return no results message', () => {
    const message = getMessage(false, 3);
    expect(message).toEqual(
      'No results found - please try a different search query...'
    );
  });

  it('should return try message', () => {
    const message = getMessage(false, 0);
    expect(message).toEqual('Try searching for an item...');
  });
});
