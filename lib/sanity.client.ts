import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-14';

const fallbackClient = {
  fetch: async <T>() => {
    console.warn('Sanity credentials não definidos. A devolver dados vazios.');
    return null as T;
  },
};

export const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: process.env.NODE_ENV === 'production',
        perspective: 'published',
      })
    : (fallbackClient as unknown as ReturnType<typeof createClient>);
