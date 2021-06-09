import * as React from "react";
import {
  IconButton,
  Box,
  Link,
  Flex
} from "@chakra-ui/react";
import siteConfig from "./configs/site-config";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = () => {
  return (
    <Box px={4} pt={10}>
      <Flex
        h={20}
        align="center"
        justify="space-between"
        w={["95%", "90%", "85%"]}
        maxW={800}
        mx="auto"
      >
        <Box fontSize="md" textAlign="left">
          Built with
          <Link href={"https://www.gatsbyjs.com/"}> Gatsby </Link>
          &
          <Link href={"https://chakra-ui.com/"}> Chakra </Link>
        </Box>
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              // isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
