import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Slider } from '@lifarl/react-scroll-snap-slider';

import Cell from '@components/Cell'
import { Box, Flex } from '@components/Grid'
import { Text } from '@components/Text'
import Target from '@components/Target'
import DribbbleCard from '../components/DribbbleCard'

const RecentProjects = () => {
  
  const slidesPerPageSettings = {
    mobileSmall: 1.5,
    mobileBig: 2.5,
    tablet: 4,
    desktop: 6,
  }

  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  )
  return (
    <Target id="recent-projects">
      <Box backgroundColor="grey.200" py={[4,5]}>
        <Text as="h3" fontSize={7} textTransform="uppercase" textAlign="center" letterSpacing="3px" color="grey.700" mt={0} mb={[3, 4]}>Recent Projects</Text>
        <Box mx="auto">
          <StaticQuery
            query={graphql`
              query recentProjectsOldQuery {
                allDribbbleShot {
                  nodes {
                    title
                    url
                    id
                    cover
                  }
                }
              }
            `}
            render={({ allDribbbleShot }) => (
              <Slider 
                renderCustomArrow={false}
                slidesPerPageSettings={slidesPerPageSettings}
                renderCustomArrow={renderCustomArrow}
              >
                {allDribbbleShot.nodes.map((project, index) => {
                  return (
                    <DribbbleCard
                      key={project.id}
                      url={project.url}
                      title={project.title}
                      src={project.cover}
                    />
                  )
                })}
              </Slider>
            )}
          ></StaticQuery>
        </Box>
      </Box>
    </Target>
  )
}

export default RecentProjects
