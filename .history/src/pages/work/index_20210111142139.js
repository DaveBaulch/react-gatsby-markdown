import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import WorkArticle from "../../components/WorkArticle"

const md = ({ data }) => {
  
  return (
    <>
      <h1 className="page-title">{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />

      <div>
        {data.allMarkdownRemark.edges.slice(1).map(edge => {
          return <WorkArticle edge={edge} />
        })}
      </div>
    </>
  )
}

const Work = ({ data }) => (
  <Layout>
    <Helmet bodyAttributes={{ class: "work-page" }}>
      <title>Work Page</title>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            year
            image
            button
            url
          }
        }
      }
    }
  }
`

export default Work
