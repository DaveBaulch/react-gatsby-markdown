import React from "react"
import "./CvArticle.scss"

const CvArticle = ({ edge }) => (
  <section>
    <article className="cv-item js-fade-up">
      <div className="cv-item__inner">
        <h2 className="cv-item__position">{edge.node.frontmatter.role}</h2>
        <div className="cv-item__company">{edge.node.frontmatter.company}</div>
        <div className="cv-item__date">{edge.node.frontmatter.dates}</div>
        <div
          className="cv-item__body"
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        />
      </div>
    </article>
  </section>
)

export default CvArticle
