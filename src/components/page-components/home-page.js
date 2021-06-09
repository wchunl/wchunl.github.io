import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Button,
  SimpleGrid,
  SlideFade,
  Text,
  Link as CLink,
  Stack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import {
  CgWebsite,
  CgServer,
  CgDatabase,
} from "react-icons/cg";
import resumeFile from "../../static/resume.pdf";

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
          <Feature title={'Frontend'} icon={<Icon as={CgWebsite} w={10} h={10} />}>
            <Text color={'gray.500'}> {'Develop frontend architecture using '} 
              <Text as="b"> {'React.js, jQuery, HTML and CSS'} </Text>
            </Text>
          </Feature>
          <Feature title={'Backend'} icon={<Icon as={CgServer} w={10} h={10} />}>
            <Text color={'gray.500'}>
              {'Build application infrastructure in  '}
              <Text as="b"> {'Node.js, Javascript, Python, C++'} </Text>
              {' and more.'}
            </Text>
          </Feature>
          <Feature title={'Databases'} icon={<Icon as={CgDatabase} w={10} h={10} />}>
            <Text color={'gray.500'}>
              {'Handle queries and data with '}
              <Text as="b"> {'PostgreSQL, DynamoDB, and MongoDB,'} </Text>
            </Text>
          </Feature>
        </SimpleGrid>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py={10}>
          <Spacer/>
          <CLink href={resumeFile}>
            <Button rounded={'full'}>See All Skills</Button>
          </CLink>
        </Stack>
        <Box as="h1" mt={10} mb={6} fontSize="3xl" fontWeight="bold" textAlign="left">
          <Text>Featured Projects</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Card 
            type="Web Application"
            title="Splitr"
            imgsrc="https://i.imgur.com/N5heWlt.png"
            codesrc="https://github.com/matt-ngo/CSE-115A"
            demosrc="https://main.d3o58cp34yf61n.amplifyapp.com/"
          >
            <Text color={'gray.500'}>
              You get dinner with friends and one person picks up the check. How do you know how to pay them back?
              Use Splitr to scan a picture of your receipt and split the total with all your friends easily!
            </Text>
          </Card>
          <Card 
            type="Game"
            title="Bomblebees"
            imgsrc="https://img.itch.zone/aW1nLzYxMjk0ODMucG5n/original/lnG6qS.png"
            codesrc="https://github.com/aith/bomblebees"
            demosrc="https://beekeep-games.itch.io/bomblebees"
          >
            <Text color={'gray.500'}>
            A competitive party game that fuses tile-matching puzzle games with top-down Bomber combat. 
            Players battle on top of an interactive puzzle board with a satisfying cast of weapons in fast-paced, online matches.
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