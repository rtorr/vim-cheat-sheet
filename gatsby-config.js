module.exports = {
  siteMetadata: {
    title: `Vim Cheat Sheet`,
    description: `A mobile friendly VIM cheat sheet`,
    github_username: 'rtorr',
    email: 'rtorruellas@gmail.com',
    twitter_username: `@richardiii`,
    author: `@richardiii`,
    baseurl: '',
    url: 'http://vim.rtorr.com'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      name: 'yaml',
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/lang`
      }
    },
    {
      name: 'configYaml',
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/config.yaml`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VIM cheat sheet`,
        short_name: `VIM`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: '#FA4949',
        display: `minimal-ui`,
        icon: `src/images/vim-cheat-sheet-icon-384.png`
      }
    }
  ]
};
