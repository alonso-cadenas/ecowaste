import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header, Search } from '../components';

export default function HomePage() {
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
        <Search />
        <img id={'banner'} alt={'Banner'} src={'/banner.jpeg'} />
      </main>
    </section>
  );
}
