import { Center, Icon, Link } from '@chakra-ui/react';

import { ReactComponent as GitHub } from './icons/github.svg';

function AppUnauthenticated() {
  const redirectUrl = 'http://localhost:5000/api/auth/github';
  const clientId = '323201eedf1cc3f305d8';

  // const client_id = '323201eedf1cc3f305d8';

  return (
    <Center h="100vh" bg="#fff">
      <Link
        display="flex"
        justify="center"
        gap="10px"
        align="center"
        padding="10px 30px"
        bg="#24292e"
        color="#fff"
        borderRadius="6px"
        boxShadow="sm"
        _hover={{ bg: '#485058', decoration: 'none' }}
        href={`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`}
      >
        <Icon as={GitHub} fontSize="20px" />
        Continue with GitHub
      </Link>
    </Center>
  );
}

export default AppUnauthenticated;
