const config = require("./config/config")

module.exports = {
  siteMetadata: config.siteMetadata,

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: config.icon,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
