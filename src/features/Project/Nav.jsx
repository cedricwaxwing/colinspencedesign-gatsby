import React from "react";
import themeGet from "@styled-system/theme-get";
import { withTheme } from "styled-components";

import Button from "@components/Button";
import Cell from "@components/Cell";
import { Box, Flex } from "@components/Grid";
import { AniLink } from "@components/Link";

const Nav = props => {
  return (
    <Box bg="grey.800" px={3} mt={5}>
      <Cell pt={5} pb={4} borderBottom="1px solid" borderBottomColor="grey.300">
        <Flex justifyContent="center">
          <AniLink
            cover
            bg={`${themeGet("colors.primary.500", "green")(props)}`}
            direction="left"
            duration={1}
            mr={4}
            from={`/portfolio/${props.current}`}
            to={`/portfolio/${props.prev}`}
          >
            <Button
              type="secondary"
              width="150px"
              type="inverse"
              p={2}
              fontSize={4}
            >
              Previous
            </Button>
          </AniLink>
          <AniLink
            cover
            bg={`${themeGet("colors.primary.500", "green")(props)}`}
            direction="right"
            duration={1}
            from={`/portfolio/${props.current}`}
            to={`/portfolio/${props.next}`}
          >
            <Button
              type="secondary"
              width="150px"
              type="inverse"
              p={2}
              fontSize={4}
            >
              Next
            </Button>
          </AniLink>
        </Flex>
      </Cell>
    </Box>
  );
};

export default withTheme(Nav);
