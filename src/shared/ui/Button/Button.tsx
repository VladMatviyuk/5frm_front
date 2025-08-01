import type { FC } from 'react';
import styles from './styles.module.css';

interface Props {
	readonly onClick?: () => void;
	readonly text: string;
	readonly type?: 'button' | 'submit';
	readonly disabled?: boolean;
	readonly color?: 'white' | 'black';
}

export const Button: FC<Props> = ({
	onClick,
	text,
	type = 'button',
	disabled = false,
	color = 'white',
}) => {
	return (
		<button
			className={[styles.button, styles[color]].join(' ')}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
