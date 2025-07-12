import type { FC } from 'react';
import type { Card as ICard } from '../model/types';

import styles from './styles.module.css';
import { useCards } from '../model/CardContext';

interface Props {
  readonly id: number;
  readonly card: ICard;
}

export const Card: FC<Props> = ({ id, card }) => {
  const { setCurrentIndex } = useCards();

  return (
    <div
      className={`${styles.card} pointer`}
      onClick={() => setCurrentIndex(id)}
    >
      {card.title}
    </div>
  );
};
