import { createCard, editCard } from '@/entities/cards/api/cardsApi';
import { Button, Form, InputField } from '@/shared/ui';
import type { FC } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import type { Card } from '@/entities/cards/model/types';

interface Props {
	readonly sectionId: string;
	readonly afterAdd: () => void;
	readonly close: () => void;
	readonly card?: Card;
}
export const FormAddCard: FC<Props> = ({
	sectionId,
	afterAdd,
	close,
	card,
}) => {
	const addCard = async (formData: FormData) => {
		const title = formData.get('title') as string;
		const text = formData.get('text') as string;

		await createCard({ title, text, sectionId });
		afterAdd();
		close();
	};

	const updateCard = async (formData: FormData) => {
		if (!card) return;

		const title = formData.get('title') as string;
		const text = formData.get('text') as string;

		await editCard(card._id, { title, text, sectionId });
		afterAdd();
		close();
	};

	return (
		<Modal>
			<Form action={!card ? addCard : updateCard}>
				<h1>{!card ? 'Добавить карточку' : 'Обновить карточку'}</h1>
				<InputField name="title" label="Название" defaultValue={card?.title} />
				<InputField
					name="text"
					type="textarea"
					label="Описание"
					defaultValue={card?.text}
				/>
				<Button
					text={!card ? 'Добавить' : 'Редактировать'}
					type="submit"
					color="black"
				/>
				<Button text="Отменить" type="button" color="black" onClick={close} />
			</Form>
		</Modal>
	);
};
