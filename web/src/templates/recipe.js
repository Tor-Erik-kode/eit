import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Recipe from '../components/recipe'

export const query = graphql`
  query RecipeTemplateQuery($id: String!) {
    recipes: sanityRecipe(id: {eq: $id}) {
      _id
      ingredients {
        amount
        name
        unit
        _key
      }
      preparation
      servings
      title
      _rawDescription
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
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
      {recipe && <Recipe {...recipe} />}
    </Layout>
  )
}

export default RecipeTemplate
