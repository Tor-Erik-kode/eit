import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Quiz from '../components/quiz'

export const query = graphql`
  query QuizTemplateQuery($id: String!) {
    quiz: sanityQuiz(id: {eq: $id}) {
      id
    _type
    questions {
      answers {
        answer
        personalityId
        _key
        _type
      }
      question
      _key
      _type
    }
    title
    personalityTypes {
      description
      name
      _key
      personalityId
    }
    }
  }
`

const QuizTemplate = props => {
  const { data, errors } = props
  const quiz = data && data.quiz
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {quiz && <SEO title={quiz.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {quiz && <Quiz {...quiz} />}
    </Layout>
  )
}

export default QuizTemplate
