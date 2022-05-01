import {
  Flex,
  GridItem,
  VStack,
  StackDivider,
  Box,
  Grid,
  Input,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Heading,
  Badge,
} from '@chakra-ui/react';

import { TriangleDownIcon } from '@chakra-ui/icons';
import SubHeader from './SubHeader';

function RepositoriesDetails() {
  return (
    <GridItem w="100%">
      <SubHeader />
      <VStack
        divider={<StackDivider borderColor="#d8dee4" />}
        spacing={6}
        align="stretch"
        py={6}
      >
        <Flex bg="yellow.200">
          <Box w="80%">
            <HStack>
              <Heading>50-projects-for-react-and-the-static-web</Heading>
              <Badge>Public</Badge>
            </HStack>
            <Text>50-projects-for-react-and-the-static-web</Text>
            <Text>
              50 project ideas to learn by doing complete with project briefs,
              layout ideas, and resources!
            </Text>
          </Box>
          <Box w="20%"></Box>
        </Flex>
        <Box h="100px" bg="tomato">
          2
        </Box>
        <Box h="100px" bg="pink.100">
          3
        </Box>
      </VStack>
    </GridItem>
  );
}

export default RepositoriesDetails;
