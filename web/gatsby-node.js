  
const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createArticlePages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityArticle(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const articleEdges = (result.data.allSanityArticle || {}).edges || []

  articleEdges
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/article/${slug}/`

      reporter.info(`Creating article page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/article.js'),
        context: {id}
      })
    })
}

async function createRecipePages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityRecipe(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const recipeEdges = (result.data.allSanityRecipe || {}).edges || []

  recipeEdges
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/recipe/${slug}/`

      reporter.info(`Creating recipe page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/recipe.js'),
        context: {id}
      })
    })
}

async function createQuizPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityQuiz(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const quizEdges = (result.data.allSanityQuiz || {}).edges || []

  quizEdges
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/quiz/${slug}/`

      reporter.info(`Creating quiz page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/quiz.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createArticlePages(graphql, actions, reporter)
  await createRecipePages(graphql, actions, reporter)
  await createQuizPages(graphql, actions, reporter)
}