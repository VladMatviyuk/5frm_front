import { createSection, updateSection } from '@/entities/sections';
import { Atom, Button, Form, InputField } from '@/shared/ui';
import { useActionState, type FC } from 'react';
import { type Section as ISection } from '@/entities/sections/model/types';
import { Modal } from '@/shared/ui/Modal/Modal';

interface Props {
	readonly close: () => void;
	readonly onAddSections: () => void;
	readonly editMode?: ISection; // Теперь optional
}

export const FormAddSection: FC<Props> = ({
	onAddSections,
	editMode,
	close,
}) => {
	type State = {
		message?: string;
		error?: string;
		name?: string;
		alias?: string;
	};

	// Начальное состояние формы
	const initialState: State = {
		message: '',
		error: '',
		name: editMode?.name || '',
		alias: editMode?.alias || '',
	};

	const action = async (prevState: State, formData: FormData) => {
		'use server';

		const name = formData.get('name') as string;
		const alias = formData.get('alias') as string;

		if (!name || !alias) {
			return { ...prevState, error: 'Название и описание обязательны' };
		}

		try {
			if (editMode) {
				await updateSection(editMode._id, { name, alias });
			} else {
				await createSection({ name, alias });
			}
			onAddSections();
			return { ...prevState, message: 'Успешно!', name: '', description: '' };
		} catch (error) {
			return { ...prevState, error: 'Произошла ошибка' };
		}
	};

	const [state, formAction, isPending] = useActionState(action, initialState);

	return (
		<Modal>
			<Form action={formAction}>
				<InputField
					name="name"
					label="Название"
					defaultValue={state.name || ''}
				/>
				<InputField
					name="alias"
					label="Описание"
					defaultValue={state.alias || ''}
				/>
				{state.error && <p style={{ color: 'red' }}>{state.error}</p>}
				<Button
					text={!editMode ? 'Добавить' : 'Редактировать'}
					type="submit"
					disabled={isPending}
					color="black"
				/>
				<Button text="Отмена" type="button" color="black" onClick={close} />
			</Form>
		</Modal>
	);
};
