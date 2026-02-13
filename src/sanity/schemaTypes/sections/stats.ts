import { defineType, defineField } from 'sanity'
import { BarChartIcon } from '@sanity/icons'

export default defineType({
  name: 'stats',
  title: 'Stats / Key Figures',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              description: 'e.g. %, +, M',
            },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title: title || 'Stats',
        subtitle: `${items?.length || 0} stats`,
      }
    },
  },
})
