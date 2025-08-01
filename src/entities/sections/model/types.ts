export type Section = { _id: string; name: string; alias: string };
export type Sections = Section[];
export type CreateSection = Omit<Section, '_id'>;
