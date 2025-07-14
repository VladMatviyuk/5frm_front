import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  readonly label: string;
  readonly name: string;
  readonly defaultValue?: string;
  readonly type?: 'text' | 'password';
}
export const InputField: FC<Props> = ({
  label,
  name,
  type = 'text',
  defaultValue = '',
}) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.inputText}
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};
