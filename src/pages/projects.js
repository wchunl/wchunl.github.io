import * as React from 'react'

import Navbar from "../components/navbar.js"
import Footer from "../components/footer"
import ProjectsPage from "../components/page-components/projects-page"

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default Projects
