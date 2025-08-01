import { useState, type FC } from 'react';
import { Card } from './Card';
import type { Card as ICard, CardList } from '../model/types';
import styles from './styles.module.css';
import { AddCard } from '@/features/add-card';
import { FormAddCard } from '@/features/add-card/ui/FormAddCard';
import { useUser } from '@/entities/user';

interface Props {
	readonly cards: CardList;
	readonly sectionId: string;
	readonly afterAdd: () => void;
}

export const CardsList: FC<Props> = ({ cards, sectionId, afterAdd }) => {
	const { auth } = useUser();
	const [showForm, setShowForm] = useState<boolean>(false);
	const [editCard, setEditCard] = useState<ICard | undefined>(undefined);

	const handleCardUpdate = (card: ICard) => {
		setEditCard(card);
		setShowForm(true);
	};

	const updateList = () => {
		setEditCard(undefined);
		setShowForm(false);
		afterAdd();
	};

	return (
		<>
			{showForm && auth && (
				<FormAddCard
					sectionId={sectionId}
					afterAdd={updateList}
					close={updateList}
					card={editCard}
				/>
			)}

			<div className={styles.cardsGrid}>
				{auth && <AddCard onClick={() => setShowForm((state) => !state)} />}

				{cards.map((card, index) => (
					<Card
						card={card}
						id={index}
						updateList={updateList}
						cardUpdate={(card: ICard) => handleCardUpdate(card)}
					/>
				))}
			</div>
		</>
	);
};
