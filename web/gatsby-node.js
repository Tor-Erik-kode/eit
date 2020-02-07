  
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
      allSanityArticle(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
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
    .filter(edge => !isFuture(edge.node.publishedAt))
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

exports.createPages = async ({graphql, actions, reporter}) => {
  await createArticlePages(graphql, actions, reporter)
}