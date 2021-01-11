import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/Layout"

const Contact = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: "contact-page" }}>
      <title>Contact Page</title>
    </Helmet>
    <main>
      <div class="container">
        <h1 class="page-title">Contact page</h1>
      </div>
    </main>
  </Layout>
)

export default Contact
