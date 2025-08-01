import { FaArrowRightFromBracket } from 'react-icons/fa6';
import styles from './styles.module.css';

import { useUser } from '@/entities/user';

export const Exit = () => {
	const { auth } = useUser();

	const onExit = () => {
		localStorage.setItem('authToken', '');
		window.location.reload();
	};

	return (
		<>
			{auth && (
				<div onClick={() => onExit()} className={styles.exit}>
					<span className="pointer">
						<FaArrowRightFromBracket size={16} />
					</span>
				</div>
			)}
		</>
	);
};
