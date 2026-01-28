import { defineField, defineType } from 'sanity';

export const newsType = defineType({
  name: 'news',
  title: 'News',
  type: 'document',

  fields: [
    // Title of the news
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (rule: any) => rule.required(),
    }),

    // Slug for the news (auto-generated from title). Looks like this: /news/my-news-title
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

    // Content of the news
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',

      of: [{ type: 'block' }], // Allows for rich text content

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

    // Publish date
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',

      // For the CMS date display
      options: {
        dateFormat: 'DD/MM/YYYY',
      },

      validation: (rule: any) => rule.required(),
    }),
  ],
});
