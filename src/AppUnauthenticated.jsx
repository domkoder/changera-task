import { Center, Icon, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as GitHub } from './icons/github.svg';

export default function AppUnauthenticated() {
  const navigate = useNavigate();
  const handleClicked = () => {
    window.replace('google.com');
  };

  return (
    <Center h="100vh" bg="#fff">
      <Link
        onClick={handleClicked}
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
        href="https://github.com/login/oauth/authorize?client_id=323201eedf1cc3f305d8"
        // onClick={() => {
        //   console.log('clicked');
        // }}
      >
        <Icon as={GitHub} fontSize="20px" />
        Continue with GitHub
      </Link>
    </Center>
  );
}
