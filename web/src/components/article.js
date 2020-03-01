import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

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
const totalWidth = 800

const StyledArticle = styled.div`

  display: grid;
  grid-template-columns: minmax(20px, auto) minmax(0, ${totalWidth}px) minmax(20px, auto);
  width: 100%;

  #content-head, #content-main, #content-sources {
    grid-column: 2;
  }
  

  #content-main {

    div:first-child {
      display: grid;
      grid-template-rows: auto;
      grid-column-gap: 10px;
      grid-template-columns: minmax(0, ${articleWidth}%) minmax(0, ${100 - articleWidth}%);

      .funfact, blockquote {
        grid-column: 2;
        text-align: center;
        padding: none;
        margin: 0px;
      }

      >:not(.funfact):not(blockquote){
        grid-column: 1; 
      }

      @media only screen and (max-width: ${totalWidth}px) {
        grid-template-columns: minmax(0, ${totalWidth}%);
        .funfact, blockquote {
          grid-column: 1;
        }
      }
      

    }

    iframe {
      width: 100%;
    }
  }
`

function Article(props) {
  const { _rawBody, title, mainImage, authors, _rawSources } = props
  console.log(_rawSources)

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
          <div id="content-head">
            <h1 >{title}</h1>
            {authors && authors.length > 0 && <Person items={authors} title={authors.length > 1 ? 'Forfattere' : 'Forfatter'} />}
          </div>
          <div id="content-main">
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>

          {_rawSources && _rawSources.length > 0 &&
            <div id="content-sources">
              <h1>Kilder</h1>
              <BlockContent blocks={_rawSources} />
            </div>
          }
        </StyledArticle>
      </Container>
    </article>
  )
}

export default Article
