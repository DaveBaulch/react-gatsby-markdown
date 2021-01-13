import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import CvArticle from "../../components/CvArticle"

const md = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  const renderedList = data.allMarkdownRemark.edges
    .slice(1)
    .map((edge, index) => {
      return <CVArticle edge={edge} key={`work-${index}`} />
    })

  return (
    <>
      <h1 className="page-title">{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

      {renderedList}
    </>
  )
}

const Cv = ({ data }) => (
  <Layout>
    <Helmet bodyAttributes={{ class: "cv-page" }}>
      <title>CV Page</title>
    </Helmet>
    <main>
      <div className="container">
        <div>{md({ data })}</div>
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/cv/" } }
      sort: { fields: [frontmatter___year], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            year
            date
            title
            role
            company
            dates
          }
        }
      }
    }
  }
`

export default Cv
