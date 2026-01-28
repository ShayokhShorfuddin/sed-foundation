import { defineField, defineType } from 'sanity';

export const issuesType = defineType({
  name: 'issues',
  title: 'Issues',
  type: 'document',

  fields: [
    // Title of the issue
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (rule: any) => rule.required(),
    }),

    // Slug for the issue (auto-generated from title)
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title', // Uses the title as the slug
        maxLength: 96,
      },

      validation: (rule: any) => rule.required(),
    }),

    // Coordinators of the issue
    defineField({
      name: 'coordinators',
      title: 'Coordinators',
      type: 'string',

      validation: (rule: any) => rule.required(),
    }),

    // Card image (acts as thumbnail)
    defineField({
      name: 'card_image',
      title: 'Card image',
      type: 'image',

      options: {
        hotspot: true,
      },

      validation: (rule: any) => rule.required(),

      // The alt text for the card image
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt',
          type: 'string',

          validation: (rule: any) => rule.required(),
        }),
      ],
    }),

    // Whole issue pdf
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',

      validation: (rule: any) => rule.required(),
    }),

    // Articles related to the issue
    defineField({
      name: 'articles',
      title: 'Articles',
      type: 'array',

      of: [
        {
          type: 'object',
          fields: [
            // Article title
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',

              validation: (rule: any) => rule.required(),
            }),

            // Article authors
            defineField({
              name: 'authors',
              title: 'Authors',
              type: 'string',

              validation: (rule: any) => rule.required(),
            }),

            // Article keywords
            defineField({
              name: 'keywords',
              title: 'Keywords',
              type: 'string',

              validation: (rule: any) => rule.required(),
            }),

            // Article abstract
            defineField({
              name: 'abstract',
              title: 'Abstract',
              type: 'text',

              validation: (rule: any) => rule.required(),
            }),

            // Article pdf
            defineField({
              name: 'pdf',
              title: 'PDF',
              type: 'file',

              validation: (rule: any) => rule.required(),
            }),
          ],
        },
      ],

      validation: (rule: any) => rule.required(),
    }),
  ],
});
