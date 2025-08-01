import styles from './style.module.css';
import type { FC, PropsWithChildren } from 'react';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>{children}</div>
		</div>
	);
};
