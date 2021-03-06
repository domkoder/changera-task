import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChakraProvider, theme, Center, Spinner, Text } from '@chakra-ui/react';
import { getUser } from './store/user';

const AppAuthenticated = React.lazy(() => import('./AppAuthenticated'));
const AppUnauthenticated = React.lazy(() => import('./AppUnauthenticated'));

function App() {
  const dispatch = useDispatch();
  const { currentUser, status } = useSelector(({ entities }) => entities.user);

  const isLoading = status === 'isLoading';
  const isSuccess = status === 'isSuccess';
  const isIdle = status === 'isIdle';

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={<PageLoader />}>
        {isSuccess && currentUser ? (
          <AppAuthenticated />
        ) : isIdle || isLoading ? (
          <PageLoader />
        ) : (
          <AppUnauthenticated />
        )}
      </React.Suspense>
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
