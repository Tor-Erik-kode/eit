import MdGroup from 'react-icons/lib/md/group'

export default {
  name: 'quiz',
  title: 'Personlighetstest',
  type: 'document',
  icon: MdGroup,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
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
  ],
}