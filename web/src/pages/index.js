import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import styled from 'styled-components'
import GraphQLErrorList from '../components/graphql-error-list'
import ArticlePreviewGrid from '../components/article-preview-grid'
import Cover from '../components/cover'
import SEO from '../components/seo'
import TocList from '../components/tocList'
import Layout from '../containers/layout'


export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    articles: allSanityArticle(
      filter: {slug: {current: {ne: null}}}
    ) {
      edges {
        node {
          _type
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
          _rawDescription
          slug {
            current
          }
        }
      }
    }

    quizes: allSanityQuiz(
      filter: {slug: {current: {ne: null}}}
    ) {
      edges {
        node {
          id
          _type
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
          _rawDescription
          slug {
            current
          }
        }
      }
    }

    recipes: allSanityRecipe(
      filter: {slug: {current: {ne: null}}}
    ) {
      edges {
        node {
          id
          _type
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
          _rawDescription
          slug {
            current
          }
        }
      }
    }

  }
`

const Index = styled.article`
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  grid-template-rows: auto;

  section {
    grid-column: 2;
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const articles = (data || {}).articles
    ? mapEdgesToNodes(data.articles)
      .filter(filterOutDocsWithoutSlugs)
    : []

  const quizes = (data || {}).quizes
    ? mapEdgesToNodes(data.quizes)
      .filter(filterOutDocsWithoutSlugs)
    : []

  const recipes = (data || {}).recipes
    ? mapEdgesToNodes(data.recipes)
      .filter(filterOutDocsWithoutSlugs)
    : []

  const allContent = [...articles, ...recipes, ...quizes];

  console.log(recipes)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Index>
        <SEO title={site.title} description={site.description} keywords={site.keywords} />
        <section>
        <Cover />
        </section>
        <section>
          <TocList />
        </section>
        <section>
          {allContent && (
            <ArticlePreviewGrid
              nodes={allContent}
            />
          )}
        </section>
      </Index>
    </Layout>
  )
}

export default IndexPage
