import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  readonly action: (formData: FormData) => void;
  readonly children: ReactNode;
}

export const Form: FC<Props> = ({ children, action }) => {
  return (
    <form action={action} className={styles.form}>
      {children}
    </form>
  );
};
