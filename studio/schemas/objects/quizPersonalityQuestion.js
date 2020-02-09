export default {
  name: 'quizPersonalityQuestion',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {type: 'quizPersonalityAnswer'}
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'question',
      answers: 'answers'
    },
    prepare(selection) {
      const {title, answers} = selection
      const numberOfAnswers = answers.length
      return {
        title: title,
        subtitle: numberOfAnswers + " answers.",
      }
    }
  }
}