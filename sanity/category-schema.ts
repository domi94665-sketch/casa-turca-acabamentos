import { defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descrição Curta',
      type: 'string',
      description: 'Breve descrição do serviço, focada em luxo e detalhe.',
      validation: (rule) => rule.required().max(240),
    }),
  ],
  // Exemplos para cadastro:
  // Cozinhas: "Soluções chave-na-mão para cozinhas de alto padrão, incluindo mármores exóticos, sistemas de ventilação ocultos e eletrodomésticos premium."
  // Casas de Banho: "Criação de ambientes de bem-estar, com cerâmicas e porcelanas turcas, banheiras freestanding e soluções de iluminação ambiente."
  // Pisos & Ladrilhos: "Instalação de porcelanatos de grande formato, pavimentos de madeira maciça e trabalhos de ladrilho de precisão (incluindo cerâmica e mosaicos)."
  // Sistemas de Gesso & Tectos: "Especialização em tectos falsos em PVC, gesso, e pladur, com design integrado de iluminação. Inclui a criação de móveis em pladur e painéis de TV."
  // Mobiliário e Carpintaria: "Design e instalação de mobiliário personalizado para todos os espaços residenciais e comerciais, garantindo ergonomia e exclusividade."
  // Instalações Técnicas: "Realização de todas as instalações técnicas necessárias aos acabamentos de luxo, incluindo pontos de luz, iluminação embutida e soluções hidráulicas."
  // Gestão de Acabamentos: "Coordenação completa desde o planeamento até à entrega final, focando-se na precisão e no cumprimento dos padrões de excelência."
});
