import * as React from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiArrowNarrowRight } from "react-icons/hi";

import Navbar from "../components/navbar.js"
import Footer from "../components/footer"

// markup
const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'100%'} maxW={800}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontSize='30px'
              >
                Oops! The page you have requested does not exist!
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Click the button below to head back to the home page!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
              <Link to="/">
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  rightIcon={<HiArrowNarrowRight />}
                >
                  Back to home page
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </>
  )
}

export default NotFoundPage
