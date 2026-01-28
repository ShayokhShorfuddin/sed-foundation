import type { SchemaTypeDefinition } from 'sanity';
import { eventsType } from './events-type';
import { issuesType } from './issues-type';
import { newsType } from './news-type';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventsType, issuesType, newsType],
};
