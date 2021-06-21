/**
 * Returns a message for the search dropdown.
 * @param isSearching
 * @param searchQueryLength
 */
export function getMessage(isSearching: boolean, searchQueryLength: number) {
  if (isSearching) {
    return 'Searching...';
  }

  if (searchQueryLength > 0) {
    return 'No results found - please try a different search query...';
  }

  return 'Try searching for an item...';
}
