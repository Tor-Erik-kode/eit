import { graphql } from "gatsby"

export const tocQuery = graphql`
fragment ContentQuery on SanitySiteSettings {
    toc {
      ... on SanityArticle {
        title
        slug {
          current
        }
        _id
        _type
      }
      ... on SanityQuiz {
        title
        slug {
          current
        }
        _id
        _type
      }
      ... on SanityRecipe {
        title
        slug {
          current
        }
        _id
        _type
      }
    }
}`
