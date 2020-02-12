import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query QuizTemplateQuery($id: String!) {
    quizs: sanityQuiz(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
    }
  }
`

const QuizTemplate = props => {
  const { data, errors } = props
  const quiz = data && data.quizs
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {quiz && <SEO title={quiz.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {console.log(quiz)}
    </Layout>
  )
}

export default QuizTemplate
