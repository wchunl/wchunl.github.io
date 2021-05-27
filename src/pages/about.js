import React from "react"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <main>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
      </p>
    </main>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
