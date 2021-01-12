import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const md = data => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const Home = ({ data }) => (
  <Layout>
    <Helmet bodyAttributes={{ class: "home-page" }}>
      <title>Index Page</title>
    </Helmet>
    <main>
      <div classNsame="container">
        <div>{md({ data })}</div>
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
  }
`

export default Home
