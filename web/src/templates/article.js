import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Article from '../components/article'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        ...ContentQuery
    }
      
    articles: sanityArticle(id: {eq: $id}) {
      id
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
      }
      title
      slug {
        current
      }
      authors {
        image {
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
        }
        name
        _key
      }
      _rawBody
      _rawSources
    }
  }
`



const ArticleTemplate = props => {
  const { data, errors } = props
  const article = data && data.articles
  const toc = data && data.site.toc.map(e => `${e._type}/${e.slug.current}`)
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {article && <SEO title={article.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {article && <Article {...article} toc={toc}/>}
    </Layout>
  )
}

export default ArticleTemplate
