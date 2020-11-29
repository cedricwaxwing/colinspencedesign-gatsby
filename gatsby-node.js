/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

/**
 * Enable absolute imports with `/src` as root.
 *
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@style': path.resolve(__dirname, './src/util/style'),
        '@components': path.resolve(__dirname, './src/components'),
        '@test': path.resolve(__dirname, './src/util/test'),
      },
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/blog-post.js')

    resolve(
      graphql(
        `
        {
          allDribbbleShot {
            nodes {
              title
              url
              cover
              id
              description
              published
              tags
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.allDribbbleShot.nodes
        
        entries.forEach((entry, index) => {
          const previousProject = index === 0 ? entries[entries.length - 1] : entries[index-1];
          const nextProject = index === entries.length - 1 ? entries[0] : entries[index+1];

          if(!nextProject) {console.log(index, entries[0])}

          createPage({
            path: `/blog/${entry.id}/`,
            component: blogPost,
            context: {
              entry: entry,
              previousProject: previousProject,
              nextProject: nextProject,
            },
          })
        })
      })
    )
  })
}
