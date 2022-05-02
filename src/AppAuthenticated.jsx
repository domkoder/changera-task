import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Grid } from '@chakra-ui/react';

import { Header, ProfileDetails, RepositoriesDetails } from './components';

function AppAuthenticated() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" paddingBottom={10}>
        <Grid gridTemplateColumns="296px 1fr" gridTemplateRows="1fr" gap={8}>
          <ProfileDetails />
          <RepositoriesDetails />
        </Grid>
      </Container>
    </>
  );
}

export default AppAuthenticated;
