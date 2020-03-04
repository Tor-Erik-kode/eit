import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import { Link } from "gatsby"

import BlockContent from './block-content'
import Container from './container'
import Person from './person'

import styled from 'styled-components'

const MainImage = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: calc(9 / 16 * 100%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
  
`

const articleWidth = 70
const totalWidth = 900

const StyledArticle = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: minmax(20px, auto) minmax(0, ${totalWidth}px) minmax(20px, auto);
  width: 100%;

  color: rgba(0, 0, 0, 0.8);

  #content-head, #content-main, #content-sources {
    grid-column: 2;
  }

  #next-link, #prev-link {
    justify-self: center;
    align-self: center;

  }

  #next-link {
    grid-column: 3;
    grid-row: 1;
    text-align: right;
  }

  #prev-link {
    grid-column: 1;
    grid-row: 1;
  }

  #content-head {
    h1 {
      font-size: calc(3em + 1vw);
      margin-bottom: 0px;
      line-height: 1em;
    }

    #description {
      font-size: calc(1.5em); 
     }
  }

  @media only screen and (max-width: ${totalWidth}px) {
    #next-link, #prev-link {
      grid-column: 2;
      align-self:auto;
      justify-self: auto;
    }
  }

  #content-sources {
    h1 {
      font-family: 'Open Sans', sans-serif;
      
    }
    ul {
      font-size: .8em;
    }
    
  }
  

  #content-main {

    div:first-child {
      display: grid;
      grid-template-rows: auto;
      grid-column-gap: 5%;
      grid-template-columns: minmax(0, ${articleWidth}%) minmax(0, ${100 - articleWidth}%);

      h1, h2, h3, h4, h5, h6 {
        line-height: 1em;
        margin-bottom: 0px;
      }

      h1 {
        font-size: calc(1.8em + 1vw);
      }
      
      h2 {
        font-size: calc(1.3em + 1vw);
        color:rgba(0, 0, 0, 0.8);
      }

      h3 {
        font-size: calc(1.2em + 1vw);
      }

      h4 {
        font-size: calc(1.1em + 1vw);
      }

      h5 {
        font-size: 1em;
      }

      p, ul {
        line-height: 1.8em;
        font-size: 18px;
      }

      
      figure {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
      

      .funfact, blockquote {
        grid-column: 2;
        text-align: center;
        margin: auto;
        padding: 10px;
      }

      >:not(.funfact):not(blockquote){
        grid-column: 1; 
      }

      @media only screen and (max-width: ${totalWidth}px) {
        grid-template-columns: minmax(0, ${totalWidth}%);
        .funfact, blockquote {
          grid-column: 1;
          width: 70%;
        }
      }
      

    }

    .funfact {
      border: 1px solid black;
    }

    iframe {
      width: 100%;
    }
  }
`

function Article(props) {
  const { _rawBody, title, mainImage, authors, _rawSources, slug, toc, _rawDescription } = props

  const slugName = slug.current
  const slugPos = toc.findIndex(e => e.includes(slugName))

  const nextItem = toc[slugPos + 1]
  const prevItem = toc[slugPos - 1]

  const nextLink = <Link to={`/${nextItem}`}>Neste artikkel</Link>
  const prevLink = <Link to={`/${prevItem}`}>Forrige artikkel</Link>

  return (
    <article>
      <MainImage>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1800)
              .height(Math.floor((9 / 16) * 1800))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        )}
      </MainImage>
      <Container>
        <StyledArticle>

          <div id="next-link">{nextItem && nextLink}</div>
          <div id="prev-link">{prevItem && prevLink}</div>
          <div id="content-head">
            <h1>{title}</h1>
            <div id="description">
            {_rawDescription && <BlockContent blocks={_rawDescription || []} />}
            </div>
            {authors && authors.length > 0 && <Person items={authors} title={authors.length > 1 ? 'Forfattere' : 'Forfatter'} />}
          </div>
          <div id="content-main">
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>

          {_rawSources && _rawSources.length > 0 &&
            <section id="content-sources">
              <h1>Kilder</h1>
              <BlockContent blocks={_rawSources} />
            </section>
          }
        </StyledArticle>
      </Container>
    </article>
  )
}

export default Article
