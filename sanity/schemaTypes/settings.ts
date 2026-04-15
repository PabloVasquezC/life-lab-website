import { defineField, defineType } from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nombre del Sitio',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      description: 'Formato: +569XXXXXXXX',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'schedule',
      title: 'Horario',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Día', type: 'string' },
            { name: 'hours', title: 'Horario', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Configuración SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título SEO', type: 'string' },
        { name: 'description', title: 'Descripción Meta', type: 'text' },
      ],
    }),
  ],
})
