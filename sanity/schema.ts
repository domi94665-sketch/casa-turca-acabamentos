import { type SchemaTypeDefinition } from 'sanity';
import { project } from './project-schema';
import { category } from './category-schema';
import { testimonial } from './testimonial-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, testimonial],
};
