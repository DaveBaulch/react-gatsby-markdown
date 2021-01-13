import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import CvArticle from "../../components/CvArticle"

const md = ({ data }) => {
  console.log(data)
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  // on netlify the order of the array is reversed?
  // let sortedData = data.allMarkdownRemark.edges.slice(1)
  // if (
  //   parseInt(data.allMarkdownRemark.edges[0].node.frontmatter.year) <
  //   parseInt(data.allMarkdownRemark.edges[1].node.frontmatter.year)
  // ) {
  //   sortedData.reverse()
  // }

  // console.log(sortedData)

  // const renderedList = data.allMarkdownRemark.edges
  //   .slice(1)
  //   .map((edge, index) => {
  //     console.log(edge.node.frontmatter.title)
  //     return <CvArticle data-sal="fade" edge={edge} key={`work-${index}`} />
  //   })

  return (
    <>
      <h1 className="page-title">{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
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
      sort: { fields: [frontmatter___date], order: DESC }
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
