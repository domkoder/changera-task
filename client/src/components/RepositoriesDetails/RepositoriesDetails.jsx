import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridItem, VStack, StackDivider, Text } from '@chakra-ui/react';

import SubHeader from './SubHeader';
import Repository from './Repository';
import Loading from './Loading';
import { getRepositories } from '../../store/repositories';

function RepositoriesDetails() {
  const dispatch = useDispatch();
  const { repositories, status, message } = useSelector(
    ({ entities }) => entities.repositories
  );

  const { currentUser } = useSelector(({ entities }) => entities.user);
  const { repos_url } = currentUser;

  const isError = status === 'isError';
  const isLoading = status === 'isLoading';
  const isSuccess = status === 'isSuccess';
  const isIdle = status === 'isIdle';

  React.useEffect(() => {
    dispatch(getRepositories(repos_url));
  }, [dispatch, repos_url]);

  return (
    <GridItem w="100%">
      <SubHeader />
      <VStack
        divider={<StackDivider borderColor="#d8dee4" />}
        spacing={6}
        align="stretch"
        py={6}
      >
        {isSuccess ? (
          repositories?.length ? (
            repositories.map((repository, index) => (
              <Repository key={index} repository={repository} />
            ))
          ) : null
        ) : isIdle || isLoading ? (
          [1, 2, 3, 4, 5].map(loader => <Loading key={loader} />)
        ) : isError ? (
          <Text>{message}</Text>
        ) : null}
      </VStack>
    </GridItem>
  );
}

export default RepositoriesDetails;
