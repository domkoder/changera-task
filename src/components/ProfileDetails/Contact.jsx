import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Organization } from '../../icons/organization.svg';

function Contact({ Icon, title }) {
  return (
    <>
      {title ? (
        <ListItem>
          <ListIcon as={Icon} fill="#57606a" />
          {title}
        </ListItem>
      ) : null}
    </>
  );
}

export default Contact;
