import * as React from 'react'
import { Link } from "gatsby";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiArrowNarrowRight } from "react-icons/hi";

export default function SplitScreen() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'100%'} maxW={800}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              fontSize='30px'
            >
              Hi, my name is
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Wai Chun Leung
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }}>
            I'm a fullstack software developer based in San Diego interested in building mobile and web applications.
            I am also a hobbyist video game designer and developer! Check out my projects below.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
            <Link to="/resume">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                rightIcon={<HiArrowNarrowRight />}
              >
                View Resume
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}