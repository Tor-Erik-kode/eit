export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'cover',
      title: 'Cover',
      description: 'This is the main picture on the front page',
      type: 'image'
    },
    {
      name: 'coverText',
      title: 'Cover Text',
      description: 'This text appears on the front page',
      type: 'coverPortableText'
    },
    {
      name: 'toc',
      title: 'Innholdsfortegnelse',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'article' },
          { type: 'recipe' },
          { type: 'quiz' }
        ]
      }],
      validation: Rule => Rule.unique()
    },
    {
      name: 'description',
      type: 'text',
      title: 'SEO description',
      description: 'For search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
  ]
}
