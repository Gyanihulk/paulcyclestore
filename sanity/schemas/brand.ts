import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../isUnique'

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique:isUniqueAcrossAllDocuments
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'Image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
