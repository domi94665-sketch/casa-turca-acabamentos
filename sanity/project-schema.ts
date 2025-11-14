import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projecto',
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
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagem de destaque',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [
        defineField({
          name: 'galleryImage',
          type: 'image',
          title: 'Imagem',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});
