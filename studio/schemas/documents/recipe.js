import {format} from 'date-fns'
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
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'number'
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
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
