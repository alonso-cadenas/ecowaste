import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { API, Auth, withSSRContext } from 'aws-amplify';
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
import Head from 'next/head';

export default function NewItemPage({ items = [] }: { items: Item[] }) {
  const router = useRouter();

  async function handleCreateItem(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    try {
      const createInput: CreateItemInput = {
        name: form.get('name').toString(),
        category: form.get('category') as Category,
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
        <title>Manage Items - EcoWaste</title>
        <meta name="description" content="Manage items." />
        <meta property="og:title" content="Manage Items - EcoWaste" />
        <meta property="og:description" content="Manage items." />
        <meta property="og:url" content="https://ecowaste.com/item/new" />
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
            <a
              href={`/item/${item.id}`}
              key={item.id}
              style={{ margin: '1rem' }}
            >
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>Create a new item</h3>

            <AmplifyAuthenticator>
              <form onSubmit={handleCreateItem}>
                <fieldset>
                  <legend>Name</legend>
                  <input name="name" required />
                </fieldset>

                <fieldset>
                  <legend>Image URL</legend>
                  <input
                    name="imageUrl"
                    type="url"
                    placeholder="https://example.com"
                    required
                  />
                </fieldset>

                <fieldset>
                  <legend>Category</legend>
                  <select name="category">
                    <option value={Category.COMPOSTABLE}>
                      {Category.COMPOSTABLE}
                    </option>
                    <option value={Category.DONATIONS}>
                      {Category.DONATIONS}
                    </option>
                    <option value={Category.HAZARDOUS}>
                      {Category.HAZARDOUS}
                    </option>
                    <option value={Category.LANDFILL}>
                      {Category.LANDFILL}
                    </option>
                    <option value={Category.RECYCLABLE}>
                      {Category.RECYCLABLE}
                    </option>
                    <option value={Category.REUSABLE}>
                      {Category.REUSABLE}
                    </option>
                  </select>
                </fieldset>

                <button className={styles.confirm}>Create Item</button>
                <button
                  className={styles.cancel}
                  type="button"
                  onClick={() => Auth.signOut()}
                >
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
