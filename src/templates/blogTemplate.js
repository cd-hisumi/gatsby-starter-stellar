import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Layout from '../components/layout'
import Seo from '../components/SEO'

export default function blogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { fields, frontmatter, html, excerpt } = data.markdownRemark
  const site = data.site.siteMetadata
  let image = `/assets/icons/logo.png`
  let large_image = false
  if (frontmatter.image) {
    large_image = true
    image = frontmatter.image
  }
  if (image.charAt(0) == '/') {
    image = `${site.contentUrl}${image}`
  }
  else {
    image = `${site.contentUrl}/posts${fields.slug}${image}`
  }
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        image={image}
        large_image={large_image}
        description={excerpt}
      />

      <Header />

      <div id="main">
        <section id="content" className="main article">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        image
        date(formatString: "YYYY-MM-DD")
      }
    }
    site {
      siteMetadata {
        siteUrl
        contentUrl
      }
    }
  }
`
