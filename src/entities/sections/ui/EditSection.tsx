import type { FC } from 'react';
import { FaPencil } from 'react-icons/fa6';
import type { Section as ISection } from '../model/types';

interface Props {
  readonly section: ISection;
  readonly setEdit: (section: ISection) => void;
}

export const EditSection: FC<Props> = ({ section, setEdit }) => {
  const handleEdit = () => {
    setEdit(section);
  };

  return (
    <div className="pointer" onClick={handleEdit}>
      <FaPencil />
    </div>
  );
};
