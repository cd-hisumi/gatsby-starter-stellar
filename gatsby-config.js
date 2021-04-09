module.exports = {
  siteMetadata: {
    title: "CoderDojo東住吉",
    author: "CoderDojo Higashi-Sumiyoshi",
    description: "CoderDojo Higashi-Sumiyoshi, Osaka HomePage"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'CoderDojo',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
