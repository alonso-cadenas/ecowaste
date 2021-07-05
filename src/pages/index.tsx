import styles from '../styles/Home.module.css';
import { Header, Search } from '../components';
import Head from 'next/head';

export default function HomePage() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Home - EcoWaste</title>
        <meta
          name="description"
          content="Learn about sustainable waste disposal."
        />
        <meta property="og:title" content="Home - EcoWaste" />
        <meta
          property="og:description"
          content="Learn about sustainable waste disposal."
        />
        <meta property="og:url" content="https://ecowaste.com" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>EcoWaste</h1>
        <h2>Learn how to dispose of your household items</h2>
        <Search />
        <img id={'banner'} alt={'Banner'} src={'/banner.jpeg'} />
      </main>
    </section>
  );
}
