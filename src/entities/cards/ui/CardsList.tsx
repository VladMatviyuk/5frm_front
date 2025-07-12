import { useState, type FC } from 'react';
import { Card } from './Card';
import type { CardList } from '../model/types';
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

  return (
    <>
      {showForm && auth && <FormAddCard sectionId={sectionId} afterAdd={afterAdd} />}

      <div className={styles.cardsGrid}>
        {auth && <AddCard onClick={() => setShowForm((state) => !state)} />}

        {cards.map((card, index) => (
          <Card card={card} id={index} />
        ))}
      </div>
    </>
  );
};
