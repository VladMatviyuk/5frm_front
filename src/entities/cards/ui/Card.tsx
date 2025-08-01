import type { FC } from 'react';
import type { Card as ICard } from '../model/types';

import styles from './styles.module.css';
import { useCards } from '../model/CardContext';
import { useUser } from '@/entities/user';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import { deleteCard } from '../api/cardsApi';

interface Props {
	readonly id: number;
	readonly card: ICard;
	readonly updateList: () => void;
	readonly cardUpdate: (card: ICard) => void;
}

export const Card: FC<Props> = ({ id, card, updateList, cardUpdate }) => {
	const { auth } = useUser();
	const { setCurrentIndex } = useCards();

	const removeCard = async (id: string) => {
		const confirmResult = confirm('Delete card?');

		if (!confirmResult) return;

		await deleteCard(id);
		updateList();
	};

	if (auth) {
		return (
			<div className={`${styles.cardAuth} pointer`}>
				<div onClick={() => setCurrentIndex(id)}>{card.title}</div>
				<div className={styles.actions}>
					<div onClick={() => cardUpdate(card)}>
						<FaPencil size={16} />
					</div>
					<div onClick={() => removeCard(card._id)}>
						<FaTrashCan size={16} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`${styles.card} pointer`}
			onClick={() => setCurrentIndex(id)}
		>
			{card.title}
		</div>
	);
};
