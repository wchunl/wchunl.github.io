import * as React from "react";
import { Link } from "gatsby";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { MotionBox } from "./motions/motion";

export default function Card({
  type,
  title,
  imgsrc,
  codesrc,
  demosrc,
  children
}) {
  return (
    <Center py={6}>
      <MotionBox
        whileHover={{ y: -5 }}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        _hover={{ shadow: "xl" }}
        boxShadow={'lg'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={imgsrc}
          />
        </Box>
        <Stack>
          <Text
            color={'blue.400'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          {children}
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'} fontSize={"sm"}>
          <Spacer/>
          <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.900'),
            }}
            to={codesrc}
          >
            {codesrc ? "Source Code" : ""}
          </Link>
          <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.900'),
            }}
            to={demosrc}
          >
            {demosrc ? "View Demo" : ""}
          </Link>
        </Stack>
      </MotionBox>
    </Center>
  );
}