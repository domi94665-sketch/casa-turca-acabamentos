
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@sanity/client';
import slugify from 'slugify';

// Configure com suas variáveis do Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN, // precisa de token de escrita
  apiVersion: '2023-11-14',
  useCdn: false,
});

const categories = [
  {
    title: 'Cozinhas',
    shortDescription:
      'Soluções chave-na-mão para cozinhas de alto padrão, incluindo mármores exóticos, sistemas de ventilação ocultos e eletrodomésticos premium.',
  },
  {
    title: 'Casas de Banho',
    shortDescription:
      'Criação de ambientes de bem-estar, com cerâmicas e porcelanas turcas, banheiras freestanding e soluções de iluminação ambiente.',
  },
  {
    title: 'Pisos & Ladrilhos',
    shortDescription:
      'Instalação de porcelanatos de grande formato, pavimentos de madeira maciça e trabalhos de ladrilho de precisão (incluindo cerâmica e mosaicos).',
  },
  {
    title: 'Sistemas de Gesso & Tectos',
    shortDescription:
      'Especialização em tectos falsos em PVC, gesso, e pladur, com design integrado de iluminação. Inclui a criação de móveis em pladur e painéis de TV.',
  },
  {
    title: 'Mobiliário e Carpintaria',
    shortDescription:
      'Design e instalação de mobiliário personalizado para todos os espaços residenciais e comerciais, garantindo ergonomia e exclusividade.',
  },
  {
    title: 'Instalações Técnicas',
    shortDescription:
      'Realização de todas as instalações técnicas necessárias aos acabamentos de luxo, incluindo pontos de luz, iluminação embutida e soluções hidráulicas.',
  },
  {
    title: 'Gestão de Acabamentos',
    shortDescription:
      'Coordenação completa desde o planeamento até à entrega final, focando-se na precisão e no cumprimento dos padrões de excelência.',
  },
];

async function importCategories() {
  for (const cat of categories) {
    const slug = slugify(cat.title, { lower: true, strict: true });
    try {
      const exists = await client.fetch(
        '*[_type == "category" && slug.current == $slug][0]',
        { slug }
      );
      if (exists) {
        console.log(`Categoria já existe: ${cat.title}`);
        continue;
      }
      await client.create({
        _type: 'category',
        title: cat.title,
        slug: { current: slug },
        shortDescription: cat.shortDescription,
      });
      console.log(`Categoria criada: ${cat.title}`);
    } catch (err) {
      console.error(`Erro ao criar categoria ${cat.title}:`, err);
    }
  }
}

importCategories();
