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
    {
      name: 'related',
      title: 'Related Content',
      type: 'relatedContent',
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
