import { defineType, defineField } from 'sanity'
import { BellIcon } from '@sanity/icons'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'object',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Link Text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Accent', value: 'accent' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      variant: 'variant',
    },
    prepare({ title, variant }) {
      return {
        title: title || 'Banner',
        subtitle: `Variant: ${variant || 'info'}`,
      }
    },
  },
})
