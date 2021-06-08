import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Button,
  SimpleGrid,
  SlideFade,
  Text,
  Stack,
  Spacer,
} from "@chakra-ui/react";

import Hero from "../hero";
import Card from "../card";
import Feature from "../feature";

const HomePage = () => {
  return (
    <SlideFade in={true}>
      <Hero/>
      <Box maxW={800} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Box as="h1" mt={10} mb={6} fontSize="3xl" fontWeight="bold" textAlign="left">
          <Text>My Skills</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Frontend'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            // icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Backend'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            // icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Databases'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
        </SimpleGrid>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py={10}>
          <Spacer/>
          <Link to="/resume">
            <Button rounded={'full'}>See All Skills</Button>
          </Link>
        </Stack>
        <Box as="h1" mt={10} mb={6} fontSize="3xl" fontWeight="bold" textAlign="left">
          <Text>Featured Projects</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Card type="Game" title="Bomblebees" codesrc="test">
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>
          </Card>
          <Card type="Game" title="Bomblebees" codesrc="test">
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>
          </Card>
        </SimpleGrid>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py={10}>
          <Spacer/>
          <Link to="/projects">
            <Button rounded={'full'}>See All Projects</Button>
          </Link>
        </Stack>
      </Box>
    </SlideFade>
  );
};

export default HomePage;