const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const website = require("./config/website");

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    email: website.email,
    phone: website.phone,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    twitter: website.twitter,
    live: false
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: website.googleAnalyticsId,
    //     anonymize: true,
    //     optimizeId: 'OPT-TPXVSXF',
    //     pageTransitionDelay: 1,

    //   }
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-VH47R4F421'],
        gtagConfig: {
          optimize_id: "OPT-TPXVSXF",
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        }
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `7tnkyz4t5gyc`,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
        access_token:
          "003d9d62ee7ad7e7c0808f4dc6361fcfae064c7603764ccb59a355449a4ea743"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false
      }
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Serif\:400,700`,
          `Barlow Condensed\:400,500,600,700`,
          `Roboto Mono\:500`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/?utm_source=a2hs`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.colinspencedesign.com",
        sitemap: "https://www.colinspencedesign.com/sitemap.xml",
        policy: [
          { userAgent: "*", disallow: ["/helloevery", "/hellobasecamp"] }
        ]
      }
    }
  ]
};
