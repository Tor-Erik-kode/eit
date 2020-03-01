import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

function Quiz(props) {
  const { title, questions, personalityType, _rawDescription } = props

  return (
    <article>
      <header>
        {title}
        {_rawDescription && <BlockContent blocks={_rawDescription || []} />
        }</header>
      <section>
        {
          questions.map(q => {
            const { question, _key, answers } = q
            return (
              <section key={_key}>
                <header>{question}</header>
                <ul>
                  {answers.map(a => <li value={a.personalityId} key={a._id}>{a.answer}</li>)}
                </ul>
              </section>
            )
          })
        }
      </section>
      <section>
        <header>Du er en </header>
      </section>
    </article>
  )
}

export default Quiz
