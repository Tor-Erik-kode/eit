export default {
  name: 'quiz',
  title: 'Personlighetstest',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      title: 'Personality types',
      description: "Personality types have an identifying id, a name, and a description.",
      type: 'array',
      of: [
        {type: 'quizPersonalityType'}
      ],
      validation: Rule => Rule.required().min(2),
    },
    {
      name: 'question',
      title: 'Question',
      description: "A question has a set of answers that match to a personality id.",
      type: 'array',
      of: [
        {type: 'quizPersonalityQuestion'}
      ],
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'related',
      title: 'Related Content',
      type: 'relatedContent',
    },
  ],
}