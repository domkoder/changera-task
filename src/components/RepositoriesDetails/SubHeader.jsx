import { Flex, Input, Button, Box } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

import DropdownButton from './DropdownButton';

import { ReactComponent as Repositories } from '../../icons/repositories.svg';

function SubHeader({ Title }) {
  return (
    <Flex gap={4} py={4} borderBottom="1px #d8dee4 solid">
      <Input
        placeholder="Find a repository…"
        size="sm"
        borderRadius="6px"
        border="1px solid #d0d7de"
        boxShadow="sm"
      />
      <Flex gap="5px">
        <DropdownButton title="Type" />
        <DropdownButton title="Language" />
        <DropdownButton title="Sort" />
      </Flex>
      <Box>
        <Button
          size="sm"
          leftIcon={<Repositories fill="#ffffff" />}
          bg="#2da44e"
          variant="solid"
          color="#ffffff"
          fontSize="14px"
          fontWeight="500"
          boxShadow="sm"
        >
          Email
        </Button>
      </Box>
    </Flex>
  );
}

export default SubHeader;
