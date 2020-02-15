import React from 'react'
import Header from './header'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .content {
    flex: 1;
  }
`

export default ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <Layout>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className="content">{children}</div>
    <footer >
      © {new Date().getFullYear()} Gruppe B - TBT4850 Eksperter i team.
    </footer>
  </Layout>
)
