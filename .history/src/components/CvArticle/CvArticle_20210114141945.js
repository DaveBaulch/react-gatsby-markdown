import React from "react"
import PropTypes from "prop-types"
import "./CvArticle.scss"

const CvArticle = ({ edge }) => (
  <section>
    <article className="cv-item">
      <div className="cv-item__inner">
        <h2 className="cv-item__position">{edge.node.frontmatter.role}</h2>
        <div className="cv-item__company">{edge.node.frontmatter.company}</div>
        <div className="cv-item__date">{edge.node.frontmatter.dates}</div>
        <div
          className="cv-item__body"
          dangerouslySetInnerHTML={{
            __html: edge.node.html,
          }}
        />
      </div>
    </article>
  </section>
)

CvArticle.propTypes = {
  edge: PropTypes.object.isRequired,
}

export default CvArticle
