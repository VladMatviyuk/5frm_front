import { CardsList } from '@/entities/cards';
import { getSectionCards } from '@/entities/cards/api/cardsApi';
import { useCards } from '@/entities/cards';
import type { CardList } from '@/entities/cards/model/types';
import { getSection } from '@/entities/sections/api/sectionsApi';
import type { Section } from '@/entities/sections/model/types';
import { Header } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CardPage } from '@/pages/card';

export const CardsPage = () => {
  const { id } = useParams();

  const [section, setSection] = useState<Section | null>(null);
  const [cards, setCards] = useState<CardList>([]);
  const { currentIndex, loadCards } = useCards();

  useEffect(() => {
    if (!id) return;

    getSection(id).then((data) => setSection(data));
    getSectionsData();
  }, []);

  const getSectionsData = () => {
    if (!id) return;
    getSectionCards(id).then((data) => {
      loadCards(data);
      setCards(data);
    });
  };

  if (!section || !id) return <>Loading...</>;

  if (currentIndex !== undefined) return <CardPage />;

  return (
    <>
      <Header title={section?.name} />
      <CardsList cards={cards} sectionId={id} afterAdd={getSectionsData} />
    </>
  );
};
