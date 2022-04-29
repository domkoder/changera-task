import {
  ChakraProvider,
  Box,
  Container,
  theme,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <Header />

        <Grid gridTemplateColumns="296px 1fr" gap={1}>
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
