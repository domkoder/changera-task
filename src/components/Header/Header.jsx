import React from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';
import SearchForm from './SearchForm';

function Header() {
  return (
    <Box
      as="header"
      w="100%"
      h="49"
      borderBottom="1px solid #d0d7de"
      mt="6"
    ></Box>
  );
}

export default Header;
