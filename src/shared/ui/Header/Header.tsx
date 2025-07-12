import type { FC } from 'react';
import { Atom } from '../Atom/Atom';
import styles from './styles.module.css';

interface Props {
  readonly title: string;
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <Atom>
        <h1>{title}</h1>
      </Atom>
    </header>
  );
};
