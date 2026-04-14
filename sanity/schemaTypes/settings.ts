import { defineField, defineType } from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      description: 'Format: +569XXXXXXXX',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'schedule',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day(s)', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'title', title: 'SEO Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' },
      ],
    }),
  ],
})
