import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: 'casa-turca-acabamentos',
  title: 'A Casa Turca Acabamentos',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema,
});
