import * as React from "react";
// import { Link } from "gatsby";
import {
  SlideFade,
  Text,
  Box,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { MotionBox } from "../motions/motion";
import { appsList, gamesList } from "../../data/projects-list";
import ProjectCard from "../project-card";

const ProjectsPage = () => {
  return (
    <SlideFade in={true}>
      <Box maxW={800} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <VStack align="start" spacing={8}>
          <Box as="h1" mt={6} fontSize="3xl" fontWeight="bold" textAlign="left">
            <Text>Projects</Text>
          </Box>
          <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
            {appsList.map((project, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.desc}
                  link={project.link}
                  technologies={project.technologies}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
        <VStack align="start" spacing={8}>
          <Box as="h1" mt={6} fontSize="3xl" fontWeight="bold" textAlign="left">
            <Text>Games</Text>
          </Box>
          <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
            {gamesList.map((project, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.desc}
                  link={project.link}
                  technologies={project.technologies}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </SlideFade>
  );
};

export default ProjectsPage;