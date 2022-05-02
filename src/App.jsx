import React from 'react';
import axios from 'axios';

import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import { ChakraProvider, Container, theme, Grid } from '@chakra-ui/react';

import { Header, ProfileDetails, RepositoriesDetails } from './components';

const AppAuthenticated = React.lazy(() => import('./AppAuthenticated'));
const AppUnauthenticated = React.lazy(() => import('./AppUnauthenticated'));

function App() {
  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log('searchParams:', searchParams);
  // console.log('setSearchParams:', setSearchParams);

  let location = useLocation();
  const code = location.search;

  // const login = () => {};

  React.useEffect(() => {
    if (!code) return;
    function postData(params) {
      axios
        .post(
          `/login/oauth/access_token${code}&client_id=323201eedf1cc3f305d8&client_secret=d8edac70128b15db86b7810104e8a35795551271`,
          {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    postData();
    // console.log('location:', code);
  }, [code]);

  return (
    <ChakraProvider theme={theme}>
      <AppAuthenticated />
    </ChakraProvider>
  );
}

export default App;
