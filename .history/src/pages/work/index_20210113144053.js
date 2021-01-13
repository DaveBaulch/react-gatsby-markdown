import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import WorkArticle from "../../components/WorkArticle"

const md = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  const firstItem = () => {
    <>
      <h1 className="page-title">{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
    />
  }


  return (
   

      <div>
        {data.allMarkdownRemark.edges.slice(1).map((edge, index) => {
          return (
            <div data-sal="fade" key={`work-${index}`}>
              <WorkArticle edge={edge} />
            </div>
          )
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
      <div className="container">
        <div>{md({ data })}</div>
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___year], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            date
            title
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
