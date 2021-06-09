import * as React from "react";
import {
  SlideFade,
  Box,
} from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <SlideFade in={true}>
      <Box maxW={800} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {'This page is under construction :)'}
      </Box>
    </SlideFade>
  );
};

export default ContactPage;