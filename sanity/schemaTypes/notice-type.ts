import { defineField, defineType } from 'sanity';

export const noticeType = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'noticeFile',
      title: 'Notice File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,image/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uploadedDate',
      title: 'Uploaded Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Uploaded Date, New',
      name: 'uploadedDateDesc',
      by: [{ field: 'uploadedDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'uploadedDate',
    },
  },
});
