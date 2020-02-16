import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

export default {
  name: 'recipe',
  title: 'Oppskrift',
  type: 'document',
  icon: MdShoppingCart,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the article',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      description: 'Motiverende tekst som frister!',
      type: 'articlePortableText'
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number'
    },
    {
      name: 'time',
      title: 'Tid',
      type: 'string'
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'ingredient'}]
    },
    {
      name: 'preparation',
      title: 'Preparation',
      type: 'array',
      of: [{type: 'string'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', slug = {}, media}) {
      return {
        title,
        media,
      }
    }
  }
}
