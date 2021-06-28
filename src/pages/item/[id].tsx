import { API, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DeleteItemInput, GetItemQuery, Item, ListItemsQuery } from '../../API';
import { deleteItem } from '../../graphql/mutations';
import { getItem, listItems } from '../../graphql/queries';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import styles from '../../styles/Home.module.css';
import { Header } from '../../components';

export default function ItemPage({ item }: { item: Item }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete(): Promise<void> {
    try {
      const deleteInput: DeleteItemInput = {
        id: item.id,
      };

      await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: deleteItem,
        variables: {
          input: deleteInput,
        },
      });

      router.push(`/`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{item.name} – Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{item.name}</h1>
        <p className={styles.description}>{item.category}</p>
        <img id={item.name} alt={item.name} src={item.imageUrl} width={600} />
      </main>

      <footer>
        <button className={styles.footer} onClick={handleDelete}>
          💥 Delete item
        </button>
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();

  const itemsQuery = (await SSR.API.graphql({
    query: listItems,
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  })) as { data: ListItemsQuery; errors: any[] };

  const paths = itemsQuery.data.listItems.items.map((item: Item) => ({
    params: { id: item.id },
  }));

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();

  const response = (await SSR.API.graphql({
    query: getItem,
    variables: {
      id: params.id,
    },
  })) as { data: GetItemQuery };

  return {
    props: {
      item: response.data.getItem,
    },
  };
};
