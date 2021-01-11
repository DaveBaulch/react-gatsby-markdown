import React from "react"
import "./CvArticle.scss"

const WorkArticle = ({ edge }) => (
  <section>
    <article className="cv-item">
      <div class="cv-item__inner">
        <h2 class="cv-item__position">
          {{ item.fields.position }}
        </h2>
        <div class="cv-item__company">
          {{ item.fields.company }}
        </div>
        <div class="cv-item__date">
          {{ item.fields.date }}
        </div>
        <div class="cv-item__body">
          <div v-html="cvItemBody" />
        </div>
      </div>
    </article>
  </section>
)

export default WorkArticle
