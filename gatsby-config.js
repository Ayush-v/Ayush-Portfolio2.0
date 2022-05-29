module.exports = {
  siteMetadata: {
    title: `Ayush Portfolio`,
    description: `Creative FrontEnd Web developer, UI/UX Designer`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ayush`,
        start_url: `/`,
        background_color: `#0c0c0c`,
        theme_color: `#0c0c0c`,
        display: `standalone`,
        icon: `src/images/logo/ayush.png`,
        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      },
    },
  ],
};
