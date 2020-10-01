<<<<<<< HEAD
module.exports = {
  siteMetadata: {
    title: `Donasi Rumah Pemberdayaan`,
    author: `rpm-peduli.org`,
  },
  plugins: [
    `gatsby-plugin-sass`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `rpm`,
	    path: `${__dirname}/data/`,
   	    plugins: [
	      `gatsby-transformer-json`,
	    ]
          },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              `gatsby-remark-relative-images`,
              {
                resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
            }
          }
        ]
      }
    }
=======
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass'
>>>>>>> 26553a3de3aee8d96d5be70341346969f5b37452
  ],
}
