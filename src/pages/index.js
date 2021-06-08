import * as React from 'react'

import Navbar from "../components/navbar.js"
import Footer from "../components/footer"
import HomePage from "../components/page-components/home-page"

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default IndexPage
