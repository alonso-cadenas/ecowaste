import { GetServerSideProps } from 'next';
import { Header, ItemList } from '../../components';
import { withSSRContext } from 'aws-amplify';
import { searchItems } from '../../graphql/queries';
import { Item, SearchItemsQuery } from '../../API';
import Head from 'next/head';

export default function SearchPage({
  items = [],
  query = '',
}: {
  items: Item[];
  query: string;
}) {
  const hasResults = !!items?.length;
  return (
    <section>
      <Head>
        <title>Search Items - EcoWaste</title>
        <meta name="description" content="Search items to dispose." />
        <meta property="og:title" content="Search Items - EcoWaste" />
        <meta property="og:description" content="Search items to dispose." />
        <meta
          property="og:url"
          content={`https://ecowaste.com/search/${query}`}
        />
      </Head>

      <Header />

      <h1 style={{ marginLeft: '1rem' }}>
        {hasResults ? 'View all search results' : 'Unable to find any results'}{' '}
        for &quot;{query}&quot;
      </h1>
      {hasResults && <ItemList items={items} />}
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const SSR = withSSRContext();
  const { query = '' } = params;
  const response = (await SSR.API.graphql({
    query: searchItems,
    variables: {
      filter: { name: { wildcard: `*${query}*` } },
    },
  })) as { data: SearchItemsQuery };

  return {
    props: {
      items: response.data.searchItems.items,
      query,
    },
  };
};
