import { useSelector } from 'react-redux';
import { GridItem, VStack, StackDivider } from '@chakra-ui/react';

import SubHeader from './SubHeader';
import Repository from './Repository';
import Loading from './Loading';

function RepositoriesDetails() {
  const repositories = useSelector(({ entities }) => entities.repositories);

  console.log('repositories:', repositories);

  return (
    <GridItem w="100%">
      <SubHeader />
      <VStack
        divider={<StackDivider borderColor="#d8dee4" />}
        spacing={6}
        align="stretch"
        py={6}
      >
        {/* <Repository /> */}
        <Loading />
      </VStack>
    </GridItem>
  );
}

export default RepositoriesDetails;
