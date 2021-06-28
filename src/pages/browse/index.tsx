import { withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../../styles/Home.module.css';
import { listItems } from '../../graphql/queries';
import { Category, Item, ListItemsQuery } from '../../API';
import { Header } from '../../components';

const CATEGORIES = [
  Category.COMPOSTABLE,
  Category.DONATIONS,
  Category.HAZARDOUS,
  Category.LANDFILL,
  Category.RECYCLABLE,
  Category.REUSABLE,
];

export default function NewItemPage({ items = [] }: { items: Item[] }) {
  const getCategoryItems = (category) => {
    const i = items.filter((item) => item.category === category);
    if (i.length > 0) {
      return i.map((categoryItem) => (
        <a
          href={`/item/${categoryItem.id}`}
          key={categoryItem.id}
          style={{ margin: '0.5rem', color: 'darkgreen' }}
        >
          <h4>{categoryItem.name}</h4>
        </a>
      ));
    }

    return <p>No items available</p>;
  };

  return (
    <section className={styles.container}>
      <Head>
        <title>EcoWaste - Sustainable waste disposal</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>EcoWaste</h1>
        <h2>Browse household items by category</h2>

        {CATEGORIES.map((category) => (
          <div className={styles.grid} key={category}>
            <h3 style={{ flex: '1 1 100%', textAlign: 'center' }}>
              {category}
            </h3>
            {getCategoryItems(category)}
          </div>
        ))}
      </main>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });

  const response = (await SSR.API.graphql({ query: listItems })) as {
    data: ListItemsQuery;
  };

  return {
    props: {
      items: response.data.listItems.items,
    },
  };
};
