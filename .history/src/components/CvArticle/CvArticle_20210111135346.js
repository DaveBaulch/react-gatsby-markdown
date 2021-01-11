import React from "react"
import "./CvArticle.scss"

const CvArticle = ({ edge }) => (
  <section>
    <article className="cv-item js-fade-up">
      <div class="cv-item__inner">
        <h2 class="cv-item__position">{edge.node.frontmatter.role}</h2>
        <div class="cv-item__company">{edge.node.frontmatter.company}</div>
        <div class="cv-item__date">{edge.node.frontmatter.dates}</div>
        <div
          class="cv-item__date"
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        />
      </div>
    </article>
  </section>
)

export default CvArticle
