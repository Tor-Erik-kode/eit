import React from 'react'
import Header from './header'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <footer >
      <div >
        <div >
          © {new Date().getFullYear()} Gruppe B - TBT4850 Eksperter i team.
        </div>
      </div>
    </footer>
  </>
)

export default Layout
