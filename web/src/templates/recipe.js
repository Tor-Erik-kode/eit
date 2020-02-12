import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query RecipeTemplateQuery($id: String!) {
    recipes: sanityRecipe(id: {eq: $id}) {
      title
      slug {
        current
      }
    }
  }
`

const RecipeTemplate = props => {
  const { data, errors } = props
  const recipe = data && data.recipes
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {recipe && <SEO title={recipe.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {console.log(recipe)}
    </Layout>
  )
}

export default RecipeTemplate
