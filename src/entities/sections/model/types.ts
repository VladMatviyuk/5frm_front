export type Section = { _id: string; name: string; description: string };
export type Sections = Section[];
export type CreateSection = Omit<Section, '_id'>;
