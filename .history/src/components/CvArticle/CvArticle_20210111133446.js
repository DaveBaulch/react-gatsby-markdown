import React from "react"
import "./CvArticle.scss"

const WorkArticle = ({ edge }) => (
  <section>
    <article className="cv-item">
      <div class="cv-item__inner">
        <h2 class="cv-item__position">{edge.node.frontmatter.role}</h2>
        <div class="cv-item__company">{edge.node.frontmatter.company}</div>
        <div class="cv-item__date">{edge.node.frontmatter.date}</div>
        <div class="cv-item__body">
          <div
            dangerouslySetInnerHTML={{
              __html: data.node.frontmatter.date,
            }}
          />
        </div>
      </div>
    </article>
  </section>
)

export default WorkArticle
