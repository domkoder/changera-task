import { Link, Text, HStack, Icon, Badge } from '@chakra-ui/react';
import React from 'react';

function HeaderLink({ link }) {
  const { title, iconComponent, badge, isActive } = link;

  return (
    <Link
      href={`#`}
      color="#24292f"
      p="8px 16px"
      outline="none"
      outlineOffset="none"
      _hover={{ decoration: 'none' }}
      _focus={{ outline: 'none' }}
      borderBottom={isActive ? `2px solid #fd8c73` : ''}
    >
      <HStack spacing="6px">
        <Icon as={iconComponent} w="16px" h="16px" fill="#6e7781" />
        <Text fontWeight={isActive ? `700` : `500`}>{title}</Text>
        {badge ? (
          <Badge borderRadius="full" p="0 6px" fontWeight="fontWeights.500">
            {badge}
          </Badge>
        ) : null}
      </HStack>
    </Link>
  );
}

export default HeaderLink;
