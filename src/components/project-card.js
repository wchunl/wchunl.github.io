import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";
// import { getTagColor } from "style/theme";
// import LazyImage from "./lazy-image";

export const getTagColor = type => {
  type = type.toLowerCase()
  if (type === "rails" || type === "ruby") {
    return "red";
  } else if (type === "react") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (type === "typescript" || type === "tailwindcss") {
    return "blue";
  } else if (type === "chakraui" || type === "css") {
    return "teal";
  }
};

export default function ProjectCard ({
  title,
  description,
  logo,
  link,
  technologies
}) {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <HStack
      as={Link}
      href={link}
      p={4}
      bg={useColorModeValue("white", "gray.800")}
      rounded="xl"
      borderWidth="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      // w="100%"
      // h="100%"
      textAlign="left"
      align="start"
      cursor="pointer"
      spacing={4}
      _hover={{ shadow: "lg" }}
      isExternal
    >
      <VStack align="start" justify="flex-start">
        <VStack spacing={0} align="start">
            <HStack>
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                onClick={e => e.stopPropagation()}
              >
                {title}
              </Text>
              <HStack spacing="1">
                {technologies.map(tech => (
                  <Tag colorScheme={getTagColor(tech)} size="sm">
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </HStack>
            <Text fontSize="sm" color={textColor}>
              {description}
            </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};
