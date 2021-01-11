import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout"

const CV = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: "cv-page" }}>
      <title>CV Page</title>
    </Helmet>
    <main>
      <div class="container">
        <h1 class="page-title">CV page</h1>
      </div>
    </main>
  </Layout>
)
export default CV
