import { Atom } from '@/shared/ui';
import { useEffect, useState, type FC } from 'react';
import { FormAddSection } from './FormAddSection';
import { type Section as ISection } from '@/entities/sections/model/types';
interface Props {
  readonly editMode: ISection | undefined;
  readonly onAddSections: () => void;
}

export const AddSection: FC<Props> = ({ onAddSections, editMode }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const afterAddSections = () => {
    onAddSections();
    setEdit(false);
  };

  useEffect(() => {
    if (!editMode) return;
    setEdit(true);
  }, [editMode]);

  if (edit) {
    return (
      <FormAddSection onAddSections={afterAddSections} editMode={editMode} />
    );
  }

  return (
    <div onClick={() => setEdit(true)}>
      <Atom outlined>Добавить раздел</Atom>
    </div>
  );
};
