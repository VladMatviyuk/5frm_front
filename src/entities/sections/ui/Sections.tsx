import { useEffect, useState, type FC } from 'react';
import { getSections } from '../api/sectionsApi';
import {
  type Sections as ISections,
  type Section as ISection,
} from '../model/types';
import { Section } from './Section';
import styles from './styles.module.css';
import { useUser } from '@/entities/user';
import { AddSection } from '@/features/add-section';

export const Sections: FC = () => {
  const { auth } = useUser();
  const [sections, setSections] = useState<ISections>([]);
  const [edit, setEdit] = useState<ISection | undefined>(undefined);

  useEffect(() => {
    getSectionsData();
  }, []);

  const getSectionsData = () => {
    getSections().then((data) => {
      setSections(data);
      setEdit(undefined);
    });
  };

  return (
    <div className={styles.list}>
      {auth && <AddSection onAddSections={getSectionsData} editMode={edit} />}

      {sections.map((section) => (
        <Section
          data={section}
          key={section._id}
          onChange={getSectionsData}
          setEdit={setEdit}
        />
      ))}
    </div>
  );
};
