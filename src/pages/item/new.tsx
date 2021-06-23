import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '../../aws-exports';
import { createItem } from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import styles from '../../styles/Home.module.css';
import { listItems } from '../../graphql/queries';
import {
  Category,
  CreateItemInput,
  CreateItemMutation,
  Item,
  ListItemsQuery,
} from '../../API';
import { Header } from '../../components';

Amplify.configure({ ...awsExports, ssr: true });

export default function NewItemPage({ items = [] }: { items: Item[] }) {
  const router = useRouter();

  async function handleCreateItem(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    try {
      const createInput: CreateItemInput = {
        name: form.get('name').toString(),
        category: Category[form.get('category').toString().toUpperCase()],
        imageUrl: form.get('imageUrl').toString(),
      };

      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createItem,
        variables: {
          input: createInput,
        },
      })) as { data: CreateItemMutation; errors: any[] };

      router.push(`/item/${request.data.createItem.id}`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>EcoWaste - Sustainable waste disposal</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>EcoWaste</h1>
        <h2>Learn how to dispose of your household items</h2>

        <p className={styles.description}>
          <code className={styles.code}>{items.length}</code>
          Items
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <a href={`/item/${item.id}`} key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>Create a new item</h3>

            <AmplifyAuthenticator>
              <form onSubmit={handleCreateItem}>
                <fieldset>
                  <legend>Name</legend>
                  <input name="name" />
                </fieldset>

                <fieldset>
                  <legend>Image URL</legend>
                  <textarea name="imageUrl" />
                </fieldset>

                <fieldset>
                  <legend>Category</legend>
                  <textarea name="category" />
                </fieldset>

                <button>Create Item</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </AmplifyAuthenticator>
          </div>
        </div>
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
