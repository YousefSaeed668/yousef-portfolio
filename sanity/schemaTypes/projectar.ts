import {defineField, defineType} from 'sanity'

export const projectsTypeAr = defineType({
  name: 'projectar',
  title: 'ProjectAr',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'github',
      title: 'Github Url',
      type: 'url',
    }),
    defineField({
      name: 'preveiw',
      title: 'Preveiw Url',
      type: 'url',
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Url',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
