import styles from './styles.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/memes">Memes</Link>
        <Link href="/documents">Documents</Link>
        <Link href="/ass">ASS</Link>
        <Link href="/drawings">Drawings</Link>
        <Link href="/music">Music</Link>
      </nav>
    </header>
  );
};

export default Header;
