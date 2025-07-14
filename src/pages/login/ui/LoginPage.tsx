import { useActionState } from 'react';
import styles from './styles.module.css';
import { Form, InputField } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { login } from '@/entities/user';
import type { LogintResponse } from '@/entities/user/model/types';

type AuthState =
  | { error: string; success?: undefined; message?: undefined }
  | { success: true; message: string; error?: undefined }
  | { error?: undefined; success?: undefined; message?: undefined };

export const LoginPage = () => {
  const sendLogin = async (_: AuthState, formData: FormData) => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username || !password) {
      return { error: 'Username и password обязательны' } satisfies AuthState;
    }

    try {
      const res: LogintResponse = await login({ username, password });

      if (res.accessToken) {
        localStorage.setItem('authToken', res.accessToken);
        window.location.replace('/');
      }
      return {
        success: true,
        message: 'Вы авторизовались',
      } satisfies AuthState;
    } catch (err) {
      return { error: 'Произошла ошибка' } satisfies AuthState;
    }
  };

  const [state, formAction, isPending] = useActionState<AuthState, FormData>(
    sendLogin,
    {}
  );
  return (
    <main className={styles.formContainer}>
      <Form action={formAction}>
        <h1>Login</h1>

        <InputField name="username" label="username" />
        <InputField name="password" label="password" type="password" />

        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        {state.success && <p style={{ color: 'green' }}>{state.message}</p>}
        <Button text={isPending ? 'Вход...' : 'Войти'} type="submit" />
      </Form>
    </main>
  );
};
