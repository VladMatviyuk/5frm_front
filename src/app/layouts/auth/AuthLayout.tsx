import { useEffect, type FC } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './styles.module.css';

export const AuthLayout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <section className={[styles.auth, 'layout'].join(' ')}>
      <main className="container">
        <Outlet />
      </main>
    </section>
  );
};
