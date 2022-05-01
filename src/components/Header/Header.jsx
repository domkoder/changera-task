import React from 'react';

import { Grid, Container, Flex, Link, Spacer, Box } from '@chakra-ui/react';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <Box borderBottom="1px solid #d0d7de" as="header" mt="6">
      <Container maxW="container.xl">
        <Grid gridTemplateColumns="296px 1fr" gap={8}>
          <Spacer />
          <HeaderNav />
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
