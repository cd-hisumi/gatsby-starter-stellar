/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, image, large_image, description, meta, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            excerpt
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const cardSummary = large_image ? `summary_large_image` : `summary`
  const metaDescription = description || site.siteMetadata.excerpt

  return (
    <Helmet
      htmlAttributes={{
        lang: `ja`,
      }}
      title={title}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        { property: `og:image`,
          content: image,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: cardSummary,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  large_image: false,
  meta: [],
  keywords: [
    `higashisumiyoshi`,
    `higashi-sumiyoshi`,
    `hisumi`,
    `ひすみ`,
  ],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  large_image: PropTypes.bool,
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
