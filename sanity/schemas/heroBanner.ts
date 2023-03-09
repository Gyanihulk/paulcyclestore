import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'smallText',
      title: 'Small text',
      type: 'string',
    }),
    defineField({
      name: 'largeText',
      title: 'Large Text',
      type: 'string',
    }),
    defineField({
      name: 'promoCode',
      title: 'Promo code',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
