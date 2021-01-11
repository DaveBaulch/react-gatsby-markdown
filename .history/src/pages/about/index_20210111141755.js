import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

const md = data => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <h1 className="">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const About = ({ data }) => (
  <Layout>
    <Helmet bodyAttributes={{ class: "about-page" }}>
      <title>About Page</title>
    </Helmet>
    <main>
      <div class="container">
        <div>{md({ data })}</div>
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
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

export default About
