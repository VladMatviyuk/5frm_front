import styles from './styles.module.css';

import { Atom } from '@/shared/ui';
import { useCards } from '@/entities/cards';
import { FaAngleLeft, FaAngleRight, FaX } from 'react-icons/fa6';

export const CardPage = () => {
  const { cards, currentCard, nextCard, prevCard, currentIndex, close } =
    useCards();

  return (
    <Atom>
      <section className={styles.card}>
        <div className={styles.actions}>
          <div className={styles.close} onClick={() => close()}>
            <FaX size={24} />
          </div>
        </div>
        <header className={styles.header}>
          <div className="pointer select-none" onClick={() => prevCard()}>
            {currentIndex != 0 && (
              <>
                <FaAngleLeft size={30} />
              </>
            )}
          </div>

          <div className="pointer select-none" onClick={() => nextCard()}>
            {currentIndex !== cards.length - 1 && (
              <>
                <FaAngleRight size={30} />
              </>
            )}
          </div>
        </header>
        <h1 className={styles.title}>{currentCard?.title}</h1>
        <div className={styles.text}>{currentCard?.text}</div>
      </section>
    </Atom>
  );
};
