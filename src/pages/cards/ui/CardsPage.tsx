import { CardsList, useCards } from '@/entities/cards';
import { getSectionCards } from '@/entities/cards/api/cardsApi';
import type { CardList } from '@/entities/cards/model/types';
import { getSection } from '@/entities/sections/api/sectionsApi';
import type { Section } from '@/entities/sections/model/types';
import { Header } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CardPage } from '@/pages/card';

export const CardsPage = () => {
	const { alias } = useParams();

	const [section, setSection] = useState<Section | null>(null);
	const [cards, setCards] = useState<CardList>([]);
	const { currentIndex, loadCards } = useCards();

	useEffect(() => {
		if (!alias) return;

		getSection(alias).then((data) => {
			setSection(data);
		});
	}, [alias]);

	useEffect(() => {
		if (!section) return;
		getSectionsData();
	}, [section]);

	const getSectionsData = () => {
		if (!section) return;
		getSectionCards(section._id).then((data) => {
			loadCards(data);
			setCards(data);
		});
	};

	if (!section || !alias) return <>Loading...</>;

	if (currentIndex !== undefined) return <CardPage />;

	return (
		<>
			<Header title={section?.name} />
			<CardsList
				cards={cards}
				sectionId={section._id}
				afterAdd={getSectionsData}
			/>
		</>
	);
};
