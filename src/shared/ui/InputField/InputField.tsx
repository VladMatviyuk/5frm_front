import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
	readonly label: string;
	readonly name: string;
	readonly defaultValue?: string;
	readonly type?: 'text' | 'password' | 'textarea';
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
			{type !== 'textarea' ? (
				<>
					<input
						className={styles.inputText}
						type={type}
						name={name}
						defaultValue={defaultValue}
					/>
				</>
			) : (
				<>
					<textarea className={styles.inputText} name={name} rows={12}>
						{defaultValue}
					</textarea>
				</>
			)}
		</div>
	);
};
