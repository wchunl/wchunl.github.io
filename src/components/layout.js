import * as React from 'react'

import Navbar from "./navbar.js"
import Footer from "./footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout
