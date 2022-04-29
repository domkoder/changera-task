import HeaderLink from './HeaderLink';
import { Box, Flex } from '@chakra-ui/react';

// import svg as rect components
import { ReactComponent as OverviewIcon } from '../../icons/overview.svg';
import { ReactComponent as Repositories } from '../../icons/repositories.svg';
import { ReactComponent as Projects } from '../../icons/projects.svg';
import { ReactComponent as Packages } from '../../icons/packages.svg';
import { ReactComponent as Stars } from '../../icons/stars.svg';

function HeaderNav() {
  return (
    <Flex as="nav">
      {links.map(link => (
        <HeaderLink link={link} key={link.index} />
      ))}
    </Flex>
  );
}

const links = [
  {
    title: 'overview',
    iconComponent: OverviewIcon,
  },

  {
    title: 'repositories',
    iconComponent: Repositories,
    badge: 20,
    isActive: true,
  },

  {
    title: 'projects',
    iconComponent: Projects,
  },

  {
    title: 'packages',
    iconComponent: Packages,
  },

  {
    title: 'stars',
    iconComponent: Stars,
    badge: 40,
  },
];

export default HeaderNav;
