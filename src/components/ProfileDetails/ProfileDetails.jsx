import React from 'react';
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
  ListItem,
  ListIcon,
  Image,
  Icon,
} from '@chakra-ui/react';

// import svg as rect components
import { ReactComponent as Users } from '../../icons/users.svg';
import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Organization } from '../../icons/organization.svg';
import Loading from './Loading';

function ProfileDetails() {
  const currentUser = useSelector(({ entities }) => entities.user);

  console.log('currentUser:', currentUser);
  return (
    <GridItem w="100%">
      <Loading />
      <Box mt="-35px">
        <Box>
          <Avatar src={currentUser.avatar_url} w="296px" h="296px">
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
            <Heading fontSize="24px">{currentUser.name}</Heading>
            <Text
              fontSize="20px"
              fontStyle="normal"
              fontWeight="300"
              color="#57606a"
            >
              {currentUser.login}
            </Text>
          </Box>
        </Box>

        <Text mb="4" fontSize="16px" color="#24292f">
          {currentUser.bio}
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
          as="p"
          mb="4"
          gap="4px"
          fontSize="14px"
          display="flex"
          alignItems="center"
        >
          <Icon as={Users} />
          <Text fontWeight="extrabold" as="span">
            {currentUser.followers}
          </Text>
          <Text color="#57606a">followers </Text>
          <box as="span">.</box>
          <Text fontWeight="extrabold" as="span">
            {currentUser.following}
          </Text>{' '}
          <Text color="#57606a">following</Text>
        </Box>

        <List spacing="5px" fontSize="14px" color="#242f29">
          <ListItem>
            <ListIcon as={Organization} fill="#57606a" />
            TeenMeetCode
          </ListItem>
          <ListItem>
            <ListIcon as={Location} fill="#57606a" />
            Nigeria Plateau State, Jos
          </ListItem>
          <ListItem>
            <ListIcon as={Mail} fill="#57606a" />
            nandommamdam@gmail.com
          </ListItem>

          <ListItem>
            <ListIcon as={Twitter} fill="#57606a" />
            @domkoder
          </ListItem>
        </List>
      </Box>
    </GridItem>
  );
}

export default ProfileDetails;
