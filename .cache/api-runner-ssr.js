var plugins = [{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":false,"fileName":false},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"./config/typography.js"},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Noto Serif","variants":["400","700"]},{"family":"Barlow Condensed","variants":["400","500","600","700"]}]},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-XXXXX","anonymize":true},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Colin Spence Design | Graphic and Web Designer | Edmonton, AB","short_name":"Colin Spence Design","description":"The recent works of Colin Spence, currently happily employed at Teaching.com, building fun web expereinces for Typing.com.","start_url":"/?utm_source=a2hs","background_color":"#F5F5F5","theme_color":"#4a4a4a","display":"standalone","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"f346b8a9a7b9887a38cc4e711b1d1d1d"},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/spencec6/Sites/projects/colinspencedesign-gatsby/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
