import { type FC } from 'react';
import { Outlet } from 'react-router';
import styles from './styles.module.css';
import { useUser } from '@/entities/user';
import { Exit } from '@/features/exit';

export const PublicLayout: FC = () => {
  const { auth } = useUser();

  return (
    <section className={[styles.public, 'layout'].join(' ')}>
      <Exit />
      <Outlet />
    </section>
  );
};
