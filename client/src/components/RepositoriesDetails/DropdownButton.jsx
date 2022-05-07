import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

import { TriangleDownIcon } from '@chakra-ui/icons';

function DropdownButton({ title }) {
  return (
    <Menu>
      <MenuButton
        variant="outline"
        size="sm"
        as={Button}
        bg="#f6f8fa"
        color="#24292f"
        fontSize="14px"
        fontWeight="500"
        boxShadow="sm"
        rightIcon={<TriangleDownIcon h="8px" w="8px" fill="#24292f" />}
      >
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem>Options 1</MenuItem>
        <MenuItem>Options 2</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropdownButton;
