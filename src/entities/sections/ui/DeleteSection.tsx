import type { FC } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { deleteSection } from '../api/sectionsApi';

interface Props {
  readonly id: string;
  readonly onChange: () => void;
}

export const DeleteSections: FC<Props> = ({ id, onChange }) => {
  const handleDelete = () => {
    const result = confirm('Удалить раздел?');
    if (result) {
      deleteSection(id).then(() => onChange());
    }
  };

  return (
    <div className="pointer" onClick={handleDelete}>
      <FaTrashCan />
    </div>
  );
};
