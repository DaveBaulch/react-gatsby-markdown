import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import WorkArticle from "../../components/WorkArticle"

const md = ({ data }) => {
  console.log(data)
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  let sortedData = data.allMarkdownRemark.edges
  if (parseInt(data.allMarkdownRemark.edges[0].node.frontmatter.year) < parseInt(data.allMarkdownRemark.edges[1].node.frontmatter.year) {
    sortedData.reverse();
  }

  console.log(sortedData);
  const renderedList = sortedData.map((edge, index) => {
    console.log(edge.node.frontmatter.title)
    return <WorkArtcle data-sal="fade" edge={edge} key={`work-${index}`} />
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            year
            image
            url
            button
          }
        }
      }
    }
  }
`

export default Work
