import React from "react"
import PropTypes from "prop-types"
import "./WorkArticle.scss"

const WorkArticle = ({ edge }) => (
  <section>
    <article className="work-item">
      <h2 className="work-item__year">{edge.node.frontmatter.year}</h2>
      <div className="work-item__inner">
        <div className="work-item__left-col">
          <div className="work-item__img-wrapper">
            <img
              src={`/work/${edge.node.frontmatter.image}`}
              alt={edge.node.frontmatter.title}
              loading="lazy"
              className="work-item__img"
              width="280"
              height="280"
            />
          </div>
        </div>
        <div className="work-item__right-col">
          <h3 className="work-item__title">{edge.node.frontmatter.title}</h3>

          {edge.node.frontmatter.url && (
            <p className="work-item__link">
              <a href={edge.node.frontmatter.url}>
                {edge.node.frontmatter.url}
              </a>
            </p>
          )}

          {edge.node.frontmatter.button && (
            <p>
              <a
                href={edge.node.frontmatter.button}
                className="work-item__archive-link"
              >
                View on webarchive.org
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  </section>
)

CvArticle.propTypes = {
  edge: PropTypes.object.isRequired,
}

export default WorkArticle
