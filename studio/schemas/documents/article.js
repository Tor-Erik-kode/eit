import Mdbook from 'react-icons/lib/md/book'

export default {
  name: 'article',
  title: 'Artikkel',
  type: 'document',
  icon: Mdbook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'person' }
      }],
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
      name: 'body',
      title: 'Body',
      type: 'articlePortableText'
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', slug = {}, media }) {
      return {
        title,
        media,
      }
    }
  }
}
