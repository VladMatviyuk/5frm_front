export type Card = {
  _id: string;
  title: string;
  text: string;
  sectionId: string;
};
export type CardList = Card[];
export type CreateCard = Omit<Card, '_id'>;
