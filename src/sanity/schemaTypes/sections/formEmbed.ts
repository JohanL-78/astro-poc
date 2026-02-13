import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export default defineType({
  name: 'formEmbed',
  title: 'Form Embed (Tally)',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tallyFormId',
      title: 'Tally Form ID',
      type: 'string',
      description: 'The ID from your Tally.so form URL (e.g. "wAxB2k")',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      formId: 'tallyFormId',
    },
    prepare({ title, formId }) {
      return {
        title: title || 'Form Embed',
        subtitle: formId ? `Tally: ${formId}` : 'No form ID',
      }
    },
  },
})
