import * as React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Text,
  Menu,
  Link as CLink,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { 
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import resumeFile from "../static/resume.pdf";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} px={4} boxShadow={"lg"}>
      <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={["95%", "90%", "85%"]}
        maxW={800}
        mx="auto"
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} align={'center'}>
          <HStack spacing={2}
            as={Link}
            to={"/"}
          >
            <Avatar
              size={"md"}
              src={"https://i.imgur.com/2SQNLtR.jpg"}
            />
            <Text fontSize="25px" fontWeight="bold">
              Wai Chun Leung
            </Text>
          </HStack>
          <Spacer/>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Button
              as={Link}
              variant={"ghost"}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900'),
              }}
              to={"/projects"}
            >
              {"Projects"}
            </Button>
            <Button
              as={CLink}
              variant={"ghost"}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900'),
              }}
              href={resumeFile}
            >
              {"Resume"}
            </Button>
            <Menu>
              <MenuButton
                variant="ghost"
                px={2}
                py={1}
                rounded={'md'}
                as={Button}
                rightIcon={<ChevronDownIcon  size={18} />}
              >
                Connect With Me
              </MenuButton>
              <MenuList>
                <CLink href="https://github.com/wchunl">
                  <MenuItem>
                    <HStack>
                      <FaGithub size={18}/>
                      <Text>Github</Text>
                    </HStack>
                  </MenuItem>
                </CLink>
                <CLink href="https://www.linkedin.com/in/wai-chun-leung-a55745171">
                  <MenuItem>
                    <HStack>
                      <FaLinkedin size={18}/>
                      <Text>LinkedIn</Text>
                    </HStack>
                  </MenuItem>
                </CLink>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <IconButton 
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <CLink
              as={Link}
              to={"/projects"}
            >
              {"Projects"}
            </CLink>
            <CLink
              href={resumeFile}
            >
              {"Resume"}
            </CLink>
            <CLink href="https://github.com/wchunl">
              <HStack>
                <FaGithub size={18}/>
                <Text>Github</Text>
              </HStack>
            </CLink>
            <CLink href="https://www.linkedin.com/in/wai-chun-leung-a55745171">
              <HStack>
                <FaLinkedin size={18}/>
                <Text>LinkedIn</Text>
              </HStack>
            </CLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}