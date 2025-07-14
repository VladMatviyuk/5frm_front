import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  readonly text: string;
  readonly type?: 'button' | 'submit';
  readonly disabled?: boolean;
}

export const Button: FC<Props> = ({
  text,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {text}
    </button>
  );
};
