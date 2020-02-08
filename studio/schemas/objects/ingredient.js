export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number'
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'string'
    }
  ],
  preview: {
    select: {
      name: 'name',
      amount: 'amount',
      unit: 'unit'
    },
    prepare(selection) {
      const {name, amount, unit} = selection
      const formatted = `${amount} ${unit} ${name}`
      return {
        title: formatted,
      }
    }
  }
}