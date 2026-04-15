import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sobre Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icono', type: 'string' },
            { name: 'value', title: 'Valor', type: 'string' },
            { name: 'label', title: 'Etiqueta', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'values',
      title: 'Nuestros Valores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
          ],
        },
      ],
    }),
  ],
})
