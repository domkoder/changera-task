import {
  ChakraProvider,
  Box,
  Container,
  theme,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Header } from './components';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.xl">
        <Grid gridTemplateColumns="296px 1fr" gap={1}>
          <ProfileDetails />
          <GridItem w="100%" h="10" />
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
