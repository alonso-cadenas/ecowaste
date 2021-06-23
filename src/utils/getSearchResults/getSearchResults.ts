import { searchItems } from '../../graphql/queries';
import { SearchItemsQuery } from '../../API';
import { API } from 'aws-amplify';

/**
 * Returns items that match the search query.
 * @param searchQuery
 */
export async function getSearchResults(searchQuery: string) {
  let items = [];
  if (searchQuery) {
    const response = (await API.graphql({
      query: searchItems,
      variables: {
        filter: { name: { wildcard: `*${searchQuery}*` } },
      },
    })) as { data: SearchItemsQuery };
    items = response?.data?.searchItems?.items;
  }
  return items;
}
