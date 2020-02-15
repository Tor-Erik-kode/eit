import React from 'react'
import Header from './header'
import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
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
    <GlobalStyle/>
    <div className="layout">
      <Header className="header" siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="content">{children}</div>
      <footer >
        © {new Date().getFullYear()} Gruppe B - TBT4850 Eksperter i team.
    </footer>
    </div>
  </>
)
