import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChakraProvider, theme, Center, Spinner, Text } from '@chakra-ui/react';
import { getUser } from './store/user';

const AppAuthenticated = React.lazy(() => import('./AppAuthenticated'));
const AppUnauthenticated = React.lazy(() => import('./AppUnauthenticated'));

function App() {
  const dispatch = useDispatch();
  const { currentUser, status, message } = useSelector(
    ({ entities }) => entities.user
  );

  const isError = status === 'isError';
  const isLoading = status === 'isLoading';
  const isSuccess = status === 'isSuccess';
  const isIdle = status === 'isIdle';

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      {isSuccess ? (
        <React.Suspense fallback={<PageLoader />}>
          {currentUser ? <AppAuthenticated /> : <AppUnauthenticated />}
        </React.Suspense>
      ) : isIdle || isLoading ? (
        <PageLoader />
      ) : isError ? (
        <Text>{message}</Text>
      ) : null}
    </ChakraProvider>
  );
}

export default App;

function PageLoader() {
  return (
    <Center h="100vh">
      <Spinner
        thickness={12}
        h="150px"
        w="150px"
        color="#24292e"
        speed="0.9s"
      />
    </Center>
  );
}
