import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '@components/Layout'
import { Flex } from '@components/Grid'
import Cell from '@components/Cell'
import BlogCard from '@components/BlogCard'
import { Text } from '@components/Text'

export default ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          live
        }
      }
    }
  `)

  const isLive = data.site.siteMetadata.live;

  const { entry, previousProject, nextProject } = props.pageContext

  const wrapURLs = function (text, new_window = true) {
    const url_pattern = /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)((?!badword).)?/ig;
    const target = (new_window === true || new_window == null) ? '_blank' : '';
    
    return text.replace(url_pattern, function (url) {
      const href = url.replace(`</p>`,"");
      return '<a href="' + href + '" target="' + target + '">' + url + '</a>';
    });
  };

  return (
    <Layout current={entry.id} isLive={isLive}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${entry.title} | Colin Spence Design`}</title>
        <link rel="canonical" href={`https://colinspencedesign.com/blog/${entry.id}`} />
      </Helmet>
      <Cell maxWidth="800px" my={5}>
        <img src={entry.cover} alt={entry.title} width="100%"/>
        <Text
          as="h2"
          fontSize={[5,6,7]}
          textTransform="uppercase"
          mt={4}
        >
          {entry.title}
        </Text>
        <Text
          as="div"
          css={{
            '& p': { marginTop: "20px"},
            '& a': { textDecoration: "underline"}
          }}
          dangerouslySetInnerHTML={{
            __html: wrapURLs(entry.description)
          }}
        />
      </Cell>
      {children}
      <Cell
        my={2}
        pt={4}
        borderTop="1px solid"
        borderColor="grey.200"
      >
        <Text
          as="h3"
          fontSize={[4,5,6]}
          textAlign="center"
          textTransform="uppercase"
          width="100%"
        >
          Related Projects
        </Text>
        <Flex flexwrap="wrap" alignItems="center" justifyContent="center" my={4}>
          <BlogCard
            key={previousProject.id}
            id={previousProject.id}
            title={previousProject.title}
            src={previousProject.cover}
            width={["100%","50%","33.3333%"]}
            initialNumberVisible={[3,6,6]}
            index={0}
            mr={4}
          />
          <BlogCard
            key={nextProject.id}
            id={nextProject.id}
            title={nextProject.title}
            src={nextProject.cover}
            width={["100%","50%","33.3333%"]}
            initialNumberVisible={[3,6,6]}
            index={1}
          />
        </Flex>
      </Cell>
    </Layout>
  )
}
