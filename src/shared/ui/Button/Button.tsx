import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  readonly text: string;
  readonly type?: 'button' | 'submit';
}

export const Button: FC<Props> = ({ text, type = 'button' }) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};
