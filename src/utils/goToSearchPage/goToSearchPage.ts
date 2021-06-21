/**
 * Takes user to the search page.
 * @param searchQuery
 */
export function goToSearchPage(searchQuery: string) {
  if (location && searchQuery !== '') {
    location.assign(`/search/${encodeURIComponent(searchQuery)}`);
  }
}
