import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  readonly children: ReactNode;
  readonly outlined?: boolean;
};
export const Atom: FC<Props> = ({ children, outlined = false }) => {
  return (
    <div className={outlined ? styles.atomOutlined : styles.atom}>
      {children}
    </div>
  );
};
