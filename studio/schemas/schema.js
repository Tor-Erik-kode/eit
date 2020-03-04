// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import article from './documents/article'
import siteSettings from './documents/siteSettings'
import recipe from './documents/recipe'
import personalityQuiz from './documents/personalityQuiz'
import person from './documents/person'

// Object types
import coverPortableText from './objects/coverPortableText'
import figure from './objects/figure'
import articlePortableText from './objects/articlePortableText'
import simplePortableText from './objects/simplePortableText'
import sourcePortableText from './objects/sourcePortableText'
import ingredient from './objects/ingredient'
import quizPersonalityQuestion from './objects/quizPersonalityQuestion'
import quizPersonalityType from './objects/quizPersonalityType'
import quizPersonalityAnswer from './objects/quizPersonalityAnswer'
import youtube from './objects/youtube'
import recipeStep from './objects/recipeStep'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'EiT',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    coverPortableText,
    sourcePortableText,
    figure,
    articlePortableText,
    simplePortableText,
    ingredient,
    quizPersonalityQuestion,
    quizPersonalityType,
    quizPersonalityAnswer,
    youtube,
    recipeStep,
    // The following are document types which will appear
    // in the studio.
    person,
    article,
    siteSettings,
    recipe,
    personalityQuiz,
  ])
})
