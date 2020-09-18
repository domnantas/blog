module.exports = {
  siteMetadata: {
    title: `Domnantas`,
    name: `Domnantas`,
    siteUrl: `https://domnantas.lt`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: "Hi! My name is Domnantas",
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/domnantas`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/aaaaaaaa_.a`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/domantaspetrauskas/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        mailchimp: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://domnantas.us2.list-manage.com/subscribe/post?u=d9f3bed782a72c4aee1239aba&amp;id=c1f2db6d96",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Domnantas",
        short_name: "Domnantas",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/logo.svg",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {},
    },
  ],
};
