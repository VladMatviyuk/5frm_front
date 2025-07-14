import { type FC } from 'react';
import { Outlet } from 'react-router';
import styles from './styles.module.css';
import { Exit } from '@/features/exit';

export const PublicLayout: FC = () => {
  return (
    <section className={[styles.public, 'layout'].join(' ')}>
      <Exit />
      <Outlet />
    </section>
  );
};
