import {
  Flex,
  Box,
  Icon,
  Link,
  ButtonGroup,
  Text,
  Button,
  IconButton,
  HStack,
  Badge,
  Center,
} from '@chakra-ui/react';

import { TriangleDownIcon } from '@chakra-ui/icons';

import { ReactComponent as Star } from '../../icons/stars.svg';
import { ReactComponent as Fork } from '../../icons/fork.svg';
import { ReactComponent as Law } from '../../icons/law.svg';
import { ReactComponent as Graph } from '../../icons/graph.svg';

// import React from 'react';

function Repository() {
  return (
    <Flex justify="space-between">
      <Box color="#57606a" fontWeight="500">
        <HStack space={2} mb="2">
          <Link color="#0969da" fontSize="20px" fontWeight="600">
            50-projects-for-react-and-the-static-web
          </Link>
          <Badge
            variant="outline"
            borderColor="#d0d7de"
            fontSize="12px"
            textTransform="capitalize"
            borderRadius="full"
            p="2px 8px"
          >
            Public
          </Badge>
        </HStack>
        <Text fontSize={'12px'} mb="2">
          Forked from{' '}
          <Link _hover={{ color: '#0969da' }}>
            colbyfayock/50-projects-for-react-and-the-static-web
          </Link>
        </Text>
        <Text mr={4} maxWidth="500px" noOfLines={2} fontSize="14px" mb="3">
          50 project ideas to learn by doing complete with project briefs,
          layout ideas, and resources! 50 project ideas to learn by doing
          complete with project briefs, layout ideas, and resources! layout
          ideas, and resources! 50 project ideas to learn by doing complete with
          project briefs, layout ideas, and resources!
        </Text>
        <HStack fontSize="12px" marginTop="10px" gap="5px">
          <Text>
            <Box as="span" />
            JavaScript
          </Text>

          <Center>
            <Icon as={Star} fill="#6e7781" w="16px" h="16px" mr="2px" />1
          </Center>

          <Center>
            <Icon as={Fork} fill="#6e7781" w="16px" h="16px" mr="1" />
            2,183
          </Center>

          <Center>
            <Icon as={Law} fill="#6e7781" w="16px" h="16px" mr="1" />
            Other
          </Center>

          <Text>Updated on Oct 22, 2021</Text>
        </HStack>
      </Box>
      <Flex direction="column" align="end" justify="space-around">
        <ButtonGroup
          size="sm"
          isAttached
          variant="outline"
          bg="#f6f8fa"
          borderColor="#1b1f2426"
          boxShadow="sm"
        >
          <Button
            mr="-px"
            color="#24292f"
            fontSize="14px"
            fontWeight="500"
            leftIcon={<Star fill="#24292f" />}
          >
            Star
          </Button>
          <IconButton
            aria-label="Add to friends"
            icon={<TriangleDownIcon h="8px" w="10px" fill="#24292f" />}
          />
        </ButtonGroup>

        <Icon as={Graph} width="155px" height="30px" />
      </Flex>
    </Flex>
  );
}

export default Repository;
