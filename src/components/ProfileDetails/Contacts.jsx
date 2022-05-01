import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Organization } from '../../icons/organization.svg';

function Contacts() {
  return (
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
  );
}

export default Contacts;
