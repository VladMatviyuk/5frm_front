import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  readonly onClick: () => void;
}

export const AddCard: FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.addCard} onClick={onClick}>
      +
    </div>
  );
};
