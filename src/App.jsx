import React from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import {
  ChakraProvider,
  Container,
  theme,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { Header, ProfileDetails, RepositoriesDetails } from './components';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  console.log('searchParams:', searchParams);
  console.log('setSearchParams:', setSearchParams);
  console.log('location:', location);

  React.useEffect(() => {});

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.xl" paddingBottom={10}>
        <Grid gridTemplateColumns="296px 1fr" gridTemplateRows="1fr" gap={8}>
          <ProfileDetails />
          <Routes>
            <Route path="/" element={<RepositoriesDetails />} />
          </Routes>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
