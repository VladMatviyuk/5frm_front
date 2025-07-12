import { Atom } from '@/shared/ui';
import type { FC } from 'react';
import type { Section as ISection } from '../model/types';
import { Link } from 'react-router';
import { useUser } from '@/entities/user';
import styles from './styles.module.css';
import { DeleteSections } from './DeleteSection';
import { EditSection } from './EditSection';

interface Props {
  readonly data: ISection;
  readonly onChange: () => void;
  readonly setEdit: (section: ISection) => void;
}

export const Section: FC<Props> = ({ data, onChange, setEdit }) => {
  const { auth } = useUser();

  return (
    <Atom>
      <div className={styles.wrapper}>
        <div className={styles.name}>
          <Link to={`${data._id}`}>{data.name}</Link>
        </div>
        {auth && (
          <div className={styles.actions}>
            <EditSection section={data} setEdit={setEdit} />
            <DeleteSections id={data._id} onChange={onChange} />
          </div>
        )}
      </div>
    </Atom>
  );
};
