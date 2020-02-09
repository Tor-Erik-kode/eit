export default {
  name: 'quizPersonalityAnswer',
  title: 'Answer',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'Corresponding personality ID',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'answer',
      id: 'id',
    },
    prepare(selection) {
      const { name, id } = selection
      const title = id + ": " + name
      return {
        title: title,
      }
    }
  }
}