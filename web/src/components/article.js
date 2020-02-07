import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

import styles from './article.module.css'

function Article(props) {
  const { _rawBody, title, mainImage, relatedArticles } = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {relatedArticles && relatedArticles.length > 0 && (
              <div className={styles.relatedArticles}>
                <h3 className={styles.relatedArticlesHeadline}>Related articles</h3>
                <ul>
                  {relatedArticles.map(article => (
                    <li key={`related_${article._id}`}>
                      {article.slug ? (
                        <Link to={`/artikkel/${article.slug.current}`}>{article.title}</Link>
                      ) : (
                          <span>{article.title}</span>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Article
