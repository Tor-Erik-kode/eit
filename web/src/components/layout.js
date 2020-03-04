import React from 'react'
import Header from './header'
import { createGlobalStyle, styled } from 'styled-components'
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    
    h1 {
      font-family: 'Martel', serif;
    }

    h2, h3, h4, h5, h6 {
      font-family: 'Open Sans', sans-serif;
    }

    figure {
      margin:0;
    }
  }
  
  .layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .header {
  }

  .content {
    flex: 1;
  }
`

export default ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Martel:700|Open+Sans&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <div className="layout">
      <Header className="header" siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="content">{children}</div>
      <footer >
        © {new Date().getFullYear()} Gruppe B - TBT4850 Eksperter i team.
    </footer>
    </div>
  </>
)
