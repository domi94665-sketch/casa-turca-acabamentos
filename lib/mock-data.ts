import type { Category, Project, Testimonial } from './types';

export const fallbackCategories: Category[] = [
  {
    _id: 'category-cozinhas',
    title: 'Cozinhas',
    slug: { current: 'cozinhas' },
  },
  {
    _id: 'category-casas-de-banho',
    title: 'Casas de Banho',
    slug: { current: 'casas-de-banho' },
  },
  {
    _id: 'category-pisos-ladrilhos',
    title: 'Pisos & Ladrilhos',
    slug: { current: 'pisos-ladrilhos' },
  },
  {
    _id: 'category-sistemas-de-gesso-tectos',
    title: 'Sistemas de Gesso & Tectos',
    slug: { current: 'sistemas-de-gesso-tectos' },
  },
  {
    _id: 'category-mobilario-e-carpintaria',
    title: 'Mobiliário e Carpintaria',
    slug: { current: 'mobilario-e-carpintaria' },
  },
  {
    _id: 'category-instalacoes-tecnicas',
    title: 'Instalações Técnicas',
    slug: { current: 'instalacoes-tecnicas' },
  },
  {
    _id: 'category-gestao-de-acabamentos',
    title: 'Gestão de Acabamentos',
    slug: { current: 'gestao-de-acabamentos' },
  },
];

export const fallbackProjects: Project[] = [
  {
    _id: 'project-palacio-golden',
    title: 'Palácio Golden Mirage',
    slug: { current: 'palacio-golden-mirage' },
    description:
      'Um refúgio residencial em Talatona com painéis em nogueira, mármore Calacatta Oro e mosaicos turcos feitos à mão.',
    category: fallbackCategories[0],
    featuredImage: {
      asset: {
        _ref: 'image-palacio-golden-featured',
        url: 'https://images.unsplash.com/photo-1560185008-5f0bb1866cab?auto=format&fit=crop&w=1600&q=80',
      },
      alt: 'Sala de estar dourada e luxuosa',
    },
    gallery: [
      {
        _key: 'palacio-golden-1',
        asset: {
          _ref: 'image-palacio-golden-1',
          url: 'https://images.unsplash.com/photo-1595421514283-ef52624120aa?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Detalhe de mármore dourado',
      },
      {
        _key: 'palacio-golden-2',
        asset: {
          _ref: 'image-palacio-golden-2',
          url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Quarto master com iluminação suave',
      },
    ],
  },
  {
    _id: 'project-bosphorus',
    title: 'Bosphorus Executive Lounge',
    slug: { current: 'bosphorus-executive-lounge' },
    description:
      'Espaço corporativo no centro financeiro de Luanda que mistura metais brunidos e iluminação cenográfica.',
    category: fallbackCategories[2],
    featuredImage: {
      asset: {
        _ref: 'image-bosphorus-featured',
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      },
      alt: 'Lobby corporativo sofisticado',
    },
    gallery: [
      {
        _key: 'bosphorus-1',
        asset: {
          _ref: 'image-bosphorus-1',
          url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Detalhes em metal dourado',
      },
      {
        _key: 'bosphorus-2',
        asset: {
          _ref: 'image-bosphorus-2',
          url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Sala de reuniões com vista',
      },
    ],
  },
  {
    _id: 'project-hamam',
    title: 'Hamam Signature Spa',
    slug: { current: 'hamam-signature-spa' },
    description:
      'Centro de bem-estar inspirado nos tradicionais hamams turcos, com zellige personalizado e aromaterapia premium.',
    category: fallbackCategories[1],
    featuredImage: {
      asset: {
        _ref: 'image-hamam-featured',
        url: 'https://images.unsplash.com/photo-1523419409543-0c1df022bdd6?auto=format&fit=crop&w=1600&q=80',
      },
      alt: 'Spa com mármore e iluminação suave',
    },
    gallery: [
      {
        _key: 'hamam-1',
        asset: {
          _ref: 'image-hamam-1',
          url: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Piscina interna com iluminação dourada',
      },
      {
        _key: 'hamam-2',
        asset: {
          _ref: 'image-hamam-2',
          url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
        },
        alt: 'Sala de relaxamento com mosaicos turcos',
      },
    ],
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: 'testimonial-leonor',
    name: 'Leonor Mendes',
    text: 'A Casa Turca transformou o nosso apartamento num cenário digno de Istambul. O cuidado com texturas e iluminação é surreal.',
    projectRef: fallbackProjects[0],
  },
  {
    _id: 'testimonial-daniel',
    name: 'Daniel Kiala',
    text: 'Integram tecnologia sem perder a alma artesanal. O lounge corporativo que desenharam elevou a nossa marca.',
    projectRef: fallbackProjects[1],
  },
];
