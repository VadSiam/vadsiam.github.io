module.exports = {
  siteMetadata: {
    title: `Vadim - Web Developer`,
    description: `Frontend, React`,
    author: `@vadsiam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vadsiam-frontend-developer`,
        short_name: `developer`,
        start_url: `/`,
        background_color: `steelblue`,
        theme_color: `steelblue`,
        display: `minimal-ui`,
        icon: `src/images/icons/react.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
