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
      name: 'toc',
      title: 'Innholdsfortegnelse',
      type: 'array',
      of: [{ type: 'contentTypes' }]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
