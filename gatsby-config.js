module.exports = {
  siteMetadata: {
    title: `Peter Lin`,
    description: `A website to showcase my career.`,
    author: `plin0009@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/assets/images/logos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Lin | Daily Logo Challenge`,
        short_name: `Peter Lin`,
        start_url: `/`,
        background_color: `#f9f8eb`,
        theme_color: `#664131`,
        display: `standalone`,
        icon: `src/assets/images/icon-512.png`
      },
    },
    'gatsby-plugin-sass'
  ],
}
