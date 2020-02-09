export default {
  name: 'relatedContent',
  title: 'Related Content',
  type: 'object',
  fields: [
    {
      name: 'next',
      title: 'Next',
      type: 'contentTypes',
      validation: Rule => Rule.max(1),
    },
    {
      name: 'prev',
      title: 'Previous',
      type: 'contentTypes',
      validation: Rule => Rule.max(1),
    },
    {
      name: 'related',
      title: 'Related',
      type: 'array',
      of: [{type: 'contentTypes'}]
    },
  ]
}