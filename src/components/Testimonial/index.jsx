import React from 'react'
import css from '@styled-system/css'
import { withTheme } from 'styled-components'
import Cell from '@components/Cell'
import Image from '@components/Image'
import { Box , Flex } from '@components/Grid'
import { Text } from '@components/Text'
import { Link } from '@components/Link'

const Testimonial = props => {

  const { testimonial } = props;

  return (
    <Box
      px={2}
      backgroundColor="primary.50"
      borderY="1px solid"
      borderColor="primary.100"
      position="relative"
      overflow="hidden"
      {...props}
    >
      <Box as="svg" width={400} opacity={0.075} color="primary.500" position="absolute" bottom={-8} right={-8} viewBox="0 0 107 79" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.9873 20.9412C57.9873 15.262 60.1673 10.3814 64.5272 6.29952C68.8871 2.39509 74.5186 0.442871 81.4218 0.442871C85.6 0.442871 89.2333 1.15278 92.3215 2.57257C95.4098 4.16984 98.0439 6.21079 100.224 8.69543C102.404 11.3575 104.039 14.2859 105.129 17.4804C106.219 20.675 106.764 23.9582 106.764 27.3302C106.764 36.5589 105.31 44.279 102.404 50.4906C99.3155 56.8797 95.5914 62.0265 91.2315 65.9309C86.69 70.0128 81.8759 73.0299 76.7894 74.9821C71.5212 76.9343 66.6163 78.0879 62.0747 78.4429V60.3405C64.4363 59.9855 66.9796 59.2756 69.7045 58.2108C72.2478 57.3234 74.7003 55.9924 77.0619 54.2176C79.2418 52.4429 81.1493 50.3132 82.7842 47.8285C84.2375 45.5214 85.055 42.8592 85.2367 39.8422C84.8734 40.0197 84.1467 40.2859 83.0567 40.6408C81.9668 40.9958 80.6951 41.1732 79.2418 41.1732C72.3387 41.1732 67.0704 39.221 63.4372 35.3166C59.8039 31.5896 57.9873 26.7978 57.9873 20.9412ZM0.763672 20.9412C0.763672 15.262 2.94362 10.3814 7.30352 6.29952C11.6634 2.39509 17.2949 0.442871 24.1981 0.442871C28.3764 0.442871 32.0096 1.15278 35.0979 2.57257C38.1861 4.16984 40.8202 6.21079 43.0002 8.69543C44.9985 11.3575 46.5426 14.2859 47.6326 17.4804C48.7225 20.675 49.2675 23.9582 49.2675 27.3302C49.2675 36.5589 47.8142 44.279 44.9076 50.4906C42.001 56.8797 38.3678 62.0265 34.0079 65.9309C29.4663 70.0128 24.6523 73.0299 19.5657 74.9821C14.2975 76.9343 9.39263 78.0879 4.85107 78.4429V60.3405C7.21269 59.9855 9.75597 59.2756 12.4809 58.2108C15.0242 57.3234 17.4766 55.9924 19.8382 54.2176C22.0182 52.4429 23.9256 50.3132 25.5606 47.8285C27.0139 45.5214 27.8314 42.8592 28.013 39.8422C27.6497 40.0197 26.9231 40.2859 25.8331 40.6408C24.7431 40.9958 23.4715 41.1732 22.0182 41.1732C15.115 41.1732 9.84679 39.221 6.21355 35.3166C2.5803 31.5896 0.763672 26.7978 0.763672 20.9412Z" fill="currentColor"/>
      </Box>
      <Cell py={5} px={3} maxWidth={800}>
        <Flex>
          <Box width={80} minWidth={80} mr={[3,4,4]} mt={2} display={["none","block"]}>
            <Image fluid={testimonial.author.image} alt={testimonial.author.name} width="100%" css={{borderRadius: "99999px", overflow: "hidden"}}/>
          </Box>
          <Box>
            <Text
                as="blockquote"
                fontWeight="500"
                color="blue.500"
                lineHeight="1.5"
                fontSize={testimonial.message.length > 1 ? [3,4] : [4,5]}
                css={{
                  '&:before': {
                    content: 'open-quote',
                    display: 'inline-block',
                    position: 'absolute',
                    transform: 'translateX(-100%)',
                  },
                  '& p:last-child:after': {
                    content: 'close-quote',
                    display: 'inline-block'
                  }
                }}
              >
                {testimonial.message.map((paragraph, index) => {
                  return (
                    <Text as="p" lineHeight="1.5" key={index} mt={index > 0 ? 4 : null}>{paragraph}</Text>
                  )
                })}
            </Text>
            <Flex mt={4} alignItems="center">
              <Box width={60} minWidth={60} mr={3} display={["block","none"]}>
                <Image fluid={testimonial.author.image} alt={testimonial.author.name} width="100%" css={{borderRadius: "99999px", overflow: "hidden"}}/>
              </Box>
              <Box>
                <Text fontSize={3} fontWeight="700" lineHeight={1}>
                  {testimonial.author.name} 
                </Text>
                <Text fontSize={2} mt={1} lineHeight={1}>
                  {testimonial.role}, {testimonial.company}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Cell>
    </Box>
  )
}

export default withTheme(Testimonial)
