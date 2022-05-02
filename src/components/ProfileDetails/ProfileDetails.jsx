import { useSelector } from 'react-redux';

import {
  GridItem,
  Box,
  AvatarBadge,
  Avatar,
  Button,
  Text,
  Heading,
  List,
  Image,
  Icon,
} from '@chakra-ui/react';

import Loading from './Loading';
import Contact from './Contact';

// import svg as rect components
import { ReactComponent as Users } from '../../icons/users.svg';
import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Link } from '../../icons/link.svg';
import { ReactComponent as Organization } from '../../icons/organization.svg';

function ProfileDetails() {
  const auth = useSelector(({ entities }) => entities.auth);
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    company,
    email,
    blog,
    location,
    twitter_username,
  } = auth.currentUser;

  return (
    <GridItem w="100%">
      {/* <Loading /> */}
      <Box mt="-35px">
        <Box>
          <Avatar src={avatar_url} w="296px" h="296px">
            <AvatarBadge
              borderColor="#d0d7de"
              border="1px solid"
              bg="#ffffff"
              w="38px"
              h="38px"
              bottom="20%"
              p="7px"
            >
              <Image
                objectFit="cover"
                borderRadius="full"
                src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8"
                alt="Dan Abramov"
              />
            </AvatarBadge>
          </Avatar>

          <Box mt="4" mb="5">
            <Heading fontSize="24px">{name}</Heading>
            <Text
              fontSize="20px"
              fontStyle="normal"
              fontWeight="300"
              color="#57606a"
            >
              {login}
            </Text>
          </Box>
        </Box>

        <Text mb="4" fontSize="16px" color="#24292f">
          {bio}
        </Text>

        <Button
          variant="outline"
          w="100%"
          size="sm"
          bg="#f6f8fa"
          fontSize="14px"
          fontWeight="500"
          mb="4"
        >
          Edit Profile
        </Button>

        <Box
          as="div"
          mb="4"
          gap="4px"
          fontSize="14px"
          display="flex"
          alignItems="center"
        >
          <Icon as={Users} fill="#57606a" />
          <Text fontWeight="extrabold" as="span">
            {followers}
          </Text>
          <Text color="#57606a">followers </Text>
          <Box as="span">.</Box>
          <Text fontWeight="extrabold" as="span">
            {following}
          </Text>{' '}
          <Text color="#57606a">following</Text>
        </Box>

        <List spacing="5px" fontSize="14px" color="#242f29">
          <Contact title={company} Icon={Organization} />
          <Contact title={location} Icon={Location} />
          <Contact title={email} Icon={Mail} />
          <Contact title={blog} Icon={Link} />
          <Contact title={twitter_username} Icon={Twitter} />
        </List>
      </Box>
    </GridItem>
  );
}

export default ProfileDetails;
