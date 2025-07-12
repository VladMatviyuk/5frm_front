import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import type { Card, CardList } from './types';

type CardContext = {
  cards: CardList;
  currentCard: Card | undefined;
  currentIndex: number;
  loadCards: (cards: CardList) => void;
  nextCard: () => void;
  prevCard: () => void;
  setCurrentIndex: (index: number) => void;
};

const CardContext = createContext<CardContext | undefined>(undefined);

export const useCards = () => {
  return useContext(CardContext);
};

interface Props {
  readonly children: ReactNode;
}
export const CardProvider: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<CardList>([]);
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );

  const loadCards = (cards: CardList) => {
    setCards(cards);
    setCurrentIndex(undefined);
  };

  const nextCard = () => {
    if (currentIndex !== undefined && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex !== undefined && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCard =
    (currentIndex !== undefined && cards[currentIndex]) || null;

  const close = () => {
    setCurrentIndex(undefined);
  };

  const value = {
    cards,
    currentCard,
    currentIndex,
    loadCards,
    nextCard,
    prevCard,
    setCurrentIndex,
    close,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
