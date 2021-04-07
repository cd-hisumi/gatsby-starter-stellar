import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import logo from '../../config/assets/images/logo.svg'

const Header = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
    </header>
  )
}

export default Header
