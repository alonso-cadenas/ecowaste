import styles from './header.module.css';
import Link from 'next/link';

type Props = {
  showSignIn?: boolean;
};

export function Header({ showSignIn = true }: Props) {
  return (
    <nav className={styles.navigation} id={'header'}>
      <Link href={'/'}>
        <a>Home</a>
      </Link>

      <Link href={'/browse'}>
        <a>Browse Categories</a>
      </Link>

      <Link href={'/item/new'}>
        <a>Manage Items</a>
      </Link>

      {showSignIn && (
        <Link href={'/sign-in'}>
          <a>Sign in</a>
        </Link>
      )}
    </nav>
  );
}
