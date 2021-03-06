import React from 'react';
import { Container, Grid } from '@chakra-ui/react';
import { Header, ProfileDetails, RepositoriesDetails } from './components';

function AppAuthenticated({ currentUser }) {
  return (
    <>
      <Header />
      <Container maxW="container.xl" paddingBottom={10}>
        <Grid gridTemplateColumns="296px 1fr" gridTemplateRows="1fr" gap={8}>
          <ProfileDetails currentUser={currentUser} />
          <RepositoriesDetails currentUser={currentUser} />
        </Grid>
      </Container>
    </>
  );
}

export default AppAuthenticated;
