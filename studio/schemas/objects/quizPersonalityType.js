export default {
  name: 'quizPersonalityType',
  title: 'Personality Type',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'id',
      title: 'Id',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      name: 'name',
      description: 'description',
      id: 'id',
    },
    prepare(selection) {
      const { name, description, id } = selection
      const title = id + ": " + name
      return {
        title: title,
        subtitle: description,
      }
    }
  }
}