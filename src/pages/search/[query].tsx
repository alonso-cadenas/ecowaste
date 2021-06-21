import { GetServerSideProps } from 'next';
import { Header, ItemList } from '../../components';

export default function SearchPage({
  items = [],
  query = '',
}: {
  items: [];
  query: string;
}) {
  const hasResults = !!items?.length;
  return (
    <section>
      <Header />
      <h1>
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
  const { query = '' } = params;
  const items = ['metal spoon', 'plastic spoon', 'wooden spoon'];

  return {
    props: {
      items,
      query,
    },
  };
};
