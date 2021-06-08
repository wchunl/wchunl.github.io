import * as React from 'react';
import { Link } from 'gatsby';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
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

const links = [
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.900'),
    }}
    to={props.path}
  >
    {props.name}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} px={4} boxShadow={"lg"}>
      <Flex
        h={16}
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
          <Button
            variant="ghost"
            rounded={'1x1'}
          >
            
            <Avatar
              as={Link}
              size={"sm"}
              to={"/"}
              // src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
            />
          </Button>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map((link, index) => (
              <Button
                variant="ghost"
                px={2}
                py={1}
                rounded={'md'}
              >
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              </Button>
            ))}
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
                <Link to="https://github.com/wchunl" isExternal>
                  <MenuItem>
                    <HStack>
                      <FaGithub size={18}/>
                      <Text>Github</Text>
                    </HStack>
                  </MenuItem>
                </Link>
                <Link to="https://www.linkedin.com/in/wai-chun-leung-a55745171" isExternal>
                  <MenuItem>
                    <HStack>
                      <FaLinkedin size={18}/>
                      <Text>LinkedIn</Text>
                    </HStack>
                  </MenuItem>
                </Link>
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
            {links.map((link, index) => (
              <NavLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}