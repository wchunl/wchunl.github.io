import * as React from "react";
import { 
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';

const Feature = ({ title, icon, children }) => {
  return (
    <Stack>
      <Flex w={12} h={12}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      {children}
    </Stack>
  );
};

export default Feature;