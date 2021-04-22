import Link from 'next/link';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>
      <p>O Melhor para você ouvir</p>
      <span>{currentDate}</span>
    </header>
  );
}
