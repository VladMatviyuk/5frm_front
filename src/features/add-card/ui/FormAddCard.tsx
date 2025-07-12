import { createCard } from '@/entities/cards/api/cardsApi';
import { Atom, Button, Form, InputField } from '@/shared/ui';
import type { FC } from 'react';

interface Props {
  readonly sectionId: string;
  readonly afterAdd: () => void;
}
export const FormAddCard: FC<Props> = ({ sectionId, afterAdd }) => {
  const addCard = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;

    await createCard({ title, text, sectionId });
    afterAdd();
  };

  return (
    <Atom outlined>
      <Form action={addCard}>
        <h1>Добавить карточку</h1>
        <InputField name="title" label="Название" />
        <InputField name="text" label="Описание" />
        <Button text="Добавить" type="submit" />
      </Form>
    </Atom>
  );
};
