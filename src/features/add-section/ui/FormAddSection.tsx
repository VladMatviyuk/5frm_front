import { createSection, updateSection } from '@/entities/sections';
import { Atom, Button, Form, InputField } from '@/shared/ui';
import { useActionState, type FC } from 'react';
import { type Section as ISection } from '@/entities/sections/model/types';

interface Props {
  readonly onAddSections: () => void;
  readonly editMode?: ISection; // Теперь optional
}

export const FormAddSection: FC<Props> = ({ onAddSections, editMode }) => {
  type State = {
    message?: string;
    error?: string;
    name?: string;
    description?: string;
  };

  // Начальное состояние формы
  const initialState: State = {
    message: '',
    error: '',
    name: editMode?.name || '',
    description: editMode?.description || '',
  };

  const action = async (prevState: State, formData: FormData) => {
    'use server';

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    if (!name || !description) {
      return { ...prevState, error: 'Название и описание обязательны' };
    }

    try {
      if (editMode) {
        await updateSection(editMode._id, { name, description });
      } else {
        await createSection({ name, description });
      }
      onAddSections();
      return { ...prevState, message: 'Успешно!', name: '', description: '' };
    } catch (error) {
      return { ...prevState, error: 'Произошла ошибка' };
    }
  };

  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <Atom outlined>
      <Form action={formAction}>
        <InputField
          name="name"
          label="Название"
          defaultValue={state.name || ''}
        />
        <InputField
          name="description"
          label="Описание"
          defaultValue={state.description || ''}
        />
        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        <Button
          text={!editMode ? 'Добавить' : 'Редактировать'}
          type="submit"
          disabled={isPending}
        />
      </Form>
    </Atom>
  );
};
